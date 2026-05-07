# 🚀 David_X Portfolio

A high-performance, production-grade developer portfolio built with modern frontend engineering practices, 3D visualization, and observability-first architecture.

---

## ✨ Overview

This project is built to demonstrate real-world frontend engineering capability beyond UI design. It focuses on performance, scalability, and production readiness.

Key highlights:

- Modern Next.js 14 App Router architecture
- Strict TypeScript codebase
- Interactive 3D experiences using Three.js
- Production-grade error monitoring with Sentry
- Advanced UI animation systems
- Scalable styling architecture with Tailwind CSS
- Performance optimization with bundle analysis

---

## 🧱 Tech Stack

### Core
- Next.js 14 (App Router, SSR/SSG hybrid rendering)
- React 18
- TypeScript

### Styling & UI System
- Tailwind CSS
- tailwind-merge
- class-variance-authority (CVA)
- tailwindcss-animate
- next-themes (dark/light mode)

### Animation & Motion
- framer-motion
- motion

### 3D & Graphics
- three
- @react-three/fiber
- @react-three/drei
- three-globe

### Monitoring & Reliability
- @sentry/nextjs
- react-error-boundary

### Icons & Assets
- lucide-react
- react-icons
- @tabler/icons-react
- mini-svg-data-uri
- react-lottie

### Performance & Tooling
- @next/bundle-analyzer
- vercel (deployment)

---

## 🧠 Architecture Principles

### 1. Component-Driven Design
Reusable and composable UI components with strict separation of concerns.

### 2. Performance-First Rendering
- Server Components where applicable
- Lazy-loaded 3D and heavy visual modules
- Optimized hydration strategy

### 3. Error Resilience
- Global Sentry integration
- React Error Boundaries for UI isolation
- Safe retry and fallback mechanisms

### 4. Type Safety
Strict TypeScript enforcement across:
- UI components
- Hooks
- Utilities
- Data flows

### 5. Scalable Styling System
Tailwind CSS combined with:
- CVA for variant-driven components
- tailwind-merge for conflict resolution

---

### 🚀 Deployment
yarn build
vercel --prod

### 📊 Performance Strategy
-Dynamic imports for heavy modules (3D scenes)
-Tree-shaking optimized dependencies
-Bundle analysis via Next.js bundle analyzer
-Minimal client-side hydration
-Optimized asset handling (SVG, Lottie, textures)

### 🧩 Error Handling Strategy
-Global error tracking via Sentry
-Component-level Error Boundaries
-Context-aware error tagging (route, component, metadata)
-Retry-safe fallback UI system


### 📁 Project Intent

This portfolio is not just a showcase of UI.

It demonstrates:

Production-ready frontend architecture
Scalable React + Next.js systems design
Performance engineering mindset
Real-world observability integration
Advanced UI/UX motion systems

## 📦 Available Scripts

```bash
yarn dev        # Start development server
yarn build      # Build for production
yarn start      # Run production server
yarn lint       # Run ESLint checks
yarn deploy     # Deploy to Vercel (production)
yarn analyze    # Analyze bundle size
```

### 🧑‍💻 Author

David_X
Software Engineer — React • Next.js • TypeScript • Node.js
