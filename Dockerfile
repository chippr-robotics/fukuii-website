# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY apps/frontend/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY apps/frontend/ ./

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 for Cloud Run
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
