# Cloud Run service for hosting the frontend
resource "google_cloud_run_v2_service" "fukuii_website" {
  name     = var.service_name
  location = var.region
  
  template {
    containers {
      image = "ghcr.io/chippr-robotics/fukuii-website:${var.image_tag}"
      
      ports {
        container_port = var.container_port
      }

      resources {
        limits = {
          cpu    = var.cpu
          memory = var.memory
        }
      }

      # Startup probe to ensure the service is ready
      startup_probe {
        http_get {
          path = "/"
          port = var.container_port
        }
        initial_delay_seconds = 0
        timeout_seconds       = 1
        period_seconds        = 3
        failure_threshold     = 3
      }
    }

    scaling {
      min_instance_count = var.min_instances
      max_instance_count = var.max_instances
    }
  }

  traffic {
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    percent = 100
  }

  # Allow unauthenticated access
  ingress = "INGRESS_TRAFFIC_ALL"
}

# IAM policy to allow public access
resource "google_cloud_run_v2_service_iam_member" "public_access" {
  name     = google_cloud_run_v2_service.fukuii_website.name
  location = google_cloud_run_v2_service.fukuii_website.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
