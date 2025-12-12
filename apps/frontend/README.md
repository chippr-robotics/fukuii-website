# fukuii Website - Frontend

React 19 + Vite frontend application for the fukuii website.

## Tech Stack

- **React 19.2.0**: Latest React with modern hooks and features
- **Vite 7 (Rolldown)**: Lightning-fast build tool and dev server
- **Tailwind CSS 3**: Utility-first CSS framework
- **Vitest 4**: Fast unit testing framework
- **Testing Library**: React component testing utilities

## Prerequisites

- Node.js >= 20.x
- npm >= 10.x

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Testing

### Run Tests

Run tests in watch mode:

```bash
npm test
```

Run tests once (CI mode):

```bash
npm run test -- --run
```

### Run Tests with UI

Launch Vitest UI for interactive testing:

```bash
npm run test:ui
```

### Test Coverage

Generate test coverage report:

```bash
npm run test:coverage
```

## Code Quality

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint -- --fix
```

## Project Structure

```
apps/frontend/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── test/           # Test setup and utilities
│   │   └── setup.js    # Vitest setup file
│   ├── App.jsx         # Main App component
│   ├── App.test.jsx    # App component tests
│   ├── App.css         # App-specific styles
│   ├── index.css       # Global styles with Tailwind
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Dependencies and scripts
```

## Configuration

### Vite

Configuration file: `vite.config.js`

Key settings:
- React plugin for JSX/TSX support
- Vitest integration for testing
- Build optimizations

### Tailwind CSS

Configuration file: `tailwind.config.js`

Customize:
- Content paths for class detection
- Theme extensions (colors, fonts, etc.)
- Custom plugins

### Testing

Configuration in: `vite.config.js`

Features:
- JSDOM environment for browser simulation
- Global test utilities
- Testing Library integration

## Docker

The frontend is containerized using a multi-stage Docker build:

1. **Build stage**: Compiles the React app
2. **Production stage**: Serves static files with nginx

Build the Docker image:

```bash
# From repository root
docker build -t fukuii-website .
```

Run the container:

```bash
docker run -p 8080:80 fukuii-website
```

Access at `http://localhost:8080`

## Environment Variables

Create a `.env.local` file for local development:

```env
# API endpoints
VITE_API_URL=http://localhost:3000

# Feature flags
VITE_ENABLE_ANALYTICS=false
```

Access in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Styling with Tailwind

Tailwind CSS is configured and ready to use:

```jsx
export default function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click me
    </button>
  )
}
```

## Writing Tests

Example test with Testing Library:

```jsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('handles clicks', () => {
    render(<MyComponent />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText('Clicked')).toBeInTheDocument()
  })
})
```

## Deployment

### CI/CD Pipeline

GitHub Actions automatically:
1. Runs linter on every push
2. Runs tests on every push
3. Builds the app on every push
4. Creates Docker image on push to `main`
5. Pushes image to GitHub Container Registry

### Manual Deployment

To deploy manually to GCP Cloud Run:

```bash
# Build image
docker build -t fukuii-website .

# Tag for GHCR
docker tag fukuii-website ghcr.io/chippr-robotics/fukuii-website:latest

# Push to registry
docker push ghcr.io/chippr-robotics/fukuii-website:latest

# Deploy with Terraform (from terraform/ directory)
cd ../terraform
terraform apply -var="image_tag=latest"
```

## Performance

### Build Optimizations

Vite automatically:
- Code splits by route
- Tree-shakes unused code
- Minifies JavaScript and CSS
- Optimizes images
- Generates source maps

### Runtime Optimizations

- React.lazy() for component code splitting
- useMemo/useCallback for expensive computations
- Virtualization for long lists

## Browser Support

Supports all modern browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

## Troubleshooting

### Port Already in Use

Change the port in `vite.config.js`:

```javascript
export default defineConfig({
  server: {
    port: 3000
  }
})
```

### Build Fails

Clear cache and reinstall:

```bash
rm -rf node_modules dist .vite
npm install
npm run build
```

### Tests Failing

Ensure setup file is loaded:

```bash
# Check vite.config.js has:
test: {
  setupFiles: './src/test/setup.js'
}
```

## Contributing

1. Create a feature branch from `main`
2. Write tests for new features
3. Ensure all tests pass: `npm test -- --run`
4. Ensure linting passes: `npm run lint`
5. Create a pull request

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vitest Documentation](https://vitest.dev)
- [Testing Library Documentation](https://testing-library.com/react)

## License

Apache License 2.0 - See LICENSE file for details
