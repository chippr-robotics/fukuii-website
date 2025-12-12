# fukuii Website

This repository contains the official website for the [fukuii](https://github.com/chippr-robotics/fukuii) project.

## About fukuii

fukuii is a Scala-based Ethereum Classic client forked from IOHK's mantis project, providing production-ready blockchain infrastructure with comprehensive tooling for developers and organizations.

## Repository Structure

This is a monorepo containing:

- **`apps/frontend/`** - React 19 + Vite frontend application
- **`terraform/`** - Infrastructure as Code for GCP deployment
- **`.github/workflows/`** - CI/CD pipeline configuration
- **Root files** - Static website (legacy GitHub Pages)

## Tech Stack

### Frontend Application
- **React 19**: Latest React with modern hooks
- **Vite 7 (Rolldown)**: Lightning-fast build tool
- **Tailwind CSS 3**: Utility-first styling
- **Vitest 4**: Fast unit testing
- **Testing Library**: Component testing

### Infrastructure
- **Docker**: Multi-stage containerization
- **GitHub Actions**: CI/CD pipeline
- **GCP Cloud Run**: Serverless container platform
- **Terraform**: Infrastructure as Code
- **GitHub Container Registry**: Docker image hosting

## Quick Start

### Frontend Development

```bash
cd apps/frontend
npm install
npm run dev
```

Visit `http://localhost:5173`

### Build and Test

```bash
# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker

Build and run locally:

```bash
# Build image
docker build -t fukuii-website .

# Run container
docker run -p 8080:80 fukuii-website
```

Visit `http://localhost:8080`

## Deployment

### CI/CD Pipeline

GitHub Actions automatically:
1. **On every push/PR**: Runs linter, tests, and builds
2. **On push to `main`**: Builds and pushes Docker image to GHCR

### Infrastructure Setup

1. **Prerequisites**:
   - GCP account with project
   - Terraform >= 1.0
   - gcloud CLI configured

2. **Configure Terraform**:
   ```bash
   cd terraform
   cp terraform.tfvars.example terraform.tfvars
   # Edit terraform.tfvars with your GCP project ID
   ```

3. **Deploy**:
   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

4. **Get service URL**:
   ```bash
   terraform output service_url
   ```

See [terraform/README.md](terraform/README.md) for detailed deployment instructions.

## Project Documentation

- **[Frontend README](apps/frontend/README.md)** - Frontend development guide
- **[Terraform README](terraform/README.md)** - Infrastructure and deployment guide
- **[Main fukuii Repository](https://github.com/chippr-robotics/fukuii)** - Core blockchain client

## Website Content

The website includes the following sections:

- **Home/Overview**: Introduction to fukuii and its capabilities
- **Features**: Detailed information about key features
- **Download**: Links to releases and installation instructions
- **Documentation**: Getting started guides and usage examples
- **History**: Project development timeline with video content
- **Contributing**: Guidelines for community contributions

## Contributing

Found an issue with the website? Want to improve the content?

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This website is part of the fukuii project, which is licensed under the Apache License 2.0.

## Links

- **Main Repository**: https://github.com/chippr-robotics/fukuii
- **Chippr Robotics**: https://github.com/chippr-robotics
- **Website**: https://chipprbots.com

---

Maintained by [Chippr Robotics](https://github.com/chippr-robotics) • Happy Helpful Robots 🤖
