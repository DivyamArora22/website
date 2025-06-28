# Portfolio Website

## Overview

This is a personal portfolio website for a computer engineering student named John Doe. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a PostgreSQL database for data persistence. The project showcases modern web development practices with a clean, professional design using Tailwind CSS and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and build processes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Environment
- **Package Manager**: npm
- **Build System**: Vite for frontend, esbuild for backend bundling
- **Type Checking**: TypeScript with strict mode enabled
- **Development Server**: Vite dev server with HMR support

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Personal introduction with animated cards
- **Projects Section**: Portfolio showcase with project cards
- **Skills Section**: Technical skills with animated progress bars
- **Contact Section**: Contact form and contact information
- **Footer**: Social links and copyright information

### Backend Structure
- **Routes**: RESTful API endpoints (currently minimal setup)
- **Storage**: Abstracted storage interface with in-memory implementation
- **Database Schema**: User management with username/password authentication

### Shared Components
- **Schema**: Drizzle schema definitions shared between frontend and backend
- **Types**: TypeScript type definitions for API contracts

## Data Flow

### Frontend Data Flow
1. React components use TanStack Query for server state management
2. API requests are made through a centralized `apiRequest` function
3. Components handle loading states and error handling through Query hooks
4. Form submissions use React Hook Form with Zod validation

### Backend Data Flow
1. Express middleware handles request parsing and logging
2. Routes delegate to storage interface for data operations
3. Storage abstraction allows switching between in-memory and database implementations
4. Database operations use Drizzle ORM with type-safe queries

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form, TanStack Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Backend**: Express.js, connect-pg-simple for sessions
- **Development**: Vite, TypeScript, esbuild

### Development Tools
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Build Tools**: Vite for frontend bundling, esbuild for backend
- **Database Tools**: Drizzle Kit for schema management and migrations

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` directory using Vite
2. Backend bundles to `dist/index.js` using esbuild
3. Static assets are served from the build directory

### Environment Configuration
- **Development**: Uses Vite dev server with Express backend
- **Production**: Serves static files through Express with API routes
- **Database**: Configured for PostgreSQL with environment-based connection string

### Hosting Considerations
- **Static Assets**: Frontend built for CDN distribution
- **API Server**: Express server handles both API and static file serving
- **Database**: PostgreSQL database with connection pooling support

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```