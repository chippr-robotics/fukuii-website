# fukuii Website Infrastructure

This directory contains Terraform configuration for deploying the fukuii website to Google Cloud Platform (GCP).

## Architecture

The infrastructure uses:
- **Cloud Run**: Serverless container platform for hosting the frontend
- **Container Registry**: GitHub Container Registry (GHCR) for Docker images
- **CI/CD**: GitHub Actions for automated builds and deployments

## Prerequisites

1. **GCP Account**: An active Google Cloud Platform account
2. **GCP Project**: A GCP project with billing enabled
3. **Terraform**: Install Terraform >= 1.0 ([Download](https://www.terraform.io/downloads))
4. **gcloud CLI**: Install and configure the gcloud CLI ([Install Guide](https://cloud.google.com/sdk/docs/install))

## Setup

### 1. Authenticate with GCP

```bash
# Login to GCP
gcloud auth login

# Set your project
gcloud config set project YOUR_PROJECT_ID

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# Configure application default credentials for Terraform
gcloud auth application-default login
```

### 2. Configure Terraform Variables

Create a `terraform.tfvars` file based on the example:

```bash
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` with your values:

```hcl
project_id   = "your-gcp-project-id"
region       = "us-central1"
service_name = "fukuii-website"
image_tag    = "latest"
```

### 3. Initialize Terraform

```bash
cd terraform
terraform init
```

### 4. Review the Plan

```bash
terraform plan
```

### 5. Apply the Configuration

```bash
terraform apply
```

Type `yes` when prompted to confirm the changes.

### 6. Get the Service URL

After deployment, Terraform will output the service URL:

```bash
terraform output service_url
```

Or retrieve it anytime with:

```bash
gcloud run services describe fukuii-website --region=us-central1 --format='value(status.url)'
```

## Updating the Deployment

### Option 1: Deploy Specific Image Tag

```bash
terraform apply -var="image_tag=main-abc123def"
```

### Option 2: Update Variables File

Edit `terraform.tfvars` and change the `image_tag` variable, then:

```bash
terraform apply
```

## Resource Management

### View Current Resources

```bash
terraform show
```

### List All Resources

```bash
terraform state list
```

### Destroy Infrastructure

⚠️ **Warning**: This will delete all resources.

```bash
terraform destroy
```

## CI/CD Integration

The GitHub Actions workflow (`.github/workflows/build-deploy.yml`) automatically:
1. Runs tests on every PR and push
2. Builds Docker image on push to `main`
3. Pushes image to GitHub Container Registry

To trigger a new deployment after CI/CD:
1. Push changes to `main` branch
2. GitHub Actions builds and pushes new image with tag `main-<commit-sha>`
3. Update Terraform with the new image tag:
   ```bash
   terraform apply -var="image_tag=main-abc123def"
   ```

## Configuration Options

### Resource Scaling

Adjust in `terraform.tfvars`:

```hcl
min_instances = 1      # Minimum instances (0 = scale to zero)
max_instances = 10     # Maximum instances
cpu           = "1"    # CPU cores per instance
memory        = "512Mi" # Memory per instance
```

### Custom Domain

To use a custom domain with Cloud Run:

1. Verify domain ownership in GCP
2. Map the domain to your Cloud Run service:
   ```bash
   gcloud run domain-mappings create \
     --service fukuii-website \
     --domain your-domain.com \
     --region us-central1
   ```

## State Management

For production use, configure remote state storage in `main.tf`:

```hcl
terraform {
  backend "gcs" {
    bucket = "your-terraform-state-bucket"
    prefix = "fukuii-website"
  }
}
```

Create the bucket first:

```bash
gsutil mb gs://your-terraform-state-bucket
gsutil versioning set on gs://your-terraform-state-bucket
```

## Troubleshooting

### Check Service Logs

```bash
gcloud run services logs read fukuii-website --region=us-central1
```

### View Service Details

```bash
gcloud run services describe fukuii-website --region=us-central1
```

### Common Issues

1. **Permission Denied**: Ensure your GCP account has necessary IAM roles:
   - Cloud Run Admin
   - Service Account User
   - Storage Admin (if using GCS backend)

2. **Image Pull Errors**: Verify the image exists in GHCR:
   ```bash
   docker pull ghcr.io/chippr-robotics/fukuii-website:latest
   ```

3. **Service Not Accessible**: Check IAM policy allows public access:
   ```bash
   gcloud run services get-iam-policy fukuii-website --region=us-central1
   ```

## Cost Optimization

Cloud Run pricing is based on:
- vCPU and memory allocation
- Request count
- Networking egress

To minimize costs:
- Set `min_instances = 0` to scale to zero when idle
- Use appropriate CPU/memory settings
- Enable request timeout

Estimate costs: [Cloud Run Pricing Calculator](https://cloud.google.com/products/calculator)

## Security

- The service is configured with public access (`allUsers` can invoke)
- HTTPS is enforced by default
- Container images should be scanned for vulnerabilities
- Consider implementing authentication for admin features

## Support

For issues or questions:
- [GitHub Issues](https://github.com/chippr-robotics/fukuii-website/issues)
- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Terraform GCP Provider Docs](https://registry.terraform.io/providers/hashicorp/google/latest/docs)
