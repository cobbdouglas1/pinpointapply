
# PinPoint Apply - AI-Powered Job Application Assistant

![PinPoint Apply Logo](/lovable-uploads/6760be0d-efdd-46aa-b7de-c33b7bc0fe59.png)

## Overview

PinPoint Apply is an AI-powered platform that helps job seekers create personalized job applications, resumes, and cover letters tailored to specific job descriptions. The application streamlines the job hunting process by leveraging AI to create customized application materials that increase the chances of landing interviews.

## Features

- **AI-Powered CV Generation**: Create tailored CVs specific to job descriptions
- **Cover Letter Creation**: Generate matching cover letters for your applications
- **Career Profile Management**: Keep all your professional details in one place
- **Application History**: Track all your job applications and their status
- **User Authentication**: Secure login/signup with email, Google or GitHub

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Context API, React Query
- **Authentication & Backend**: Supabase
- **Routing**: React Router

## Recent Updates

### Latest Changes

- Updated application logo throughout the platform for consistent branding
- Updated the marketing image on the landing page to better illustrate the job application journey
- Fixed authentication issues that sometimes required multiple login attempts
- Added loading states to the login form to prevent multiple submissions
- Improved redirection after successful login/logout
- Created Examples page to showcase CV templates

### Fixed Issues

- **Login Reliability**: Fixed intermittent login issues by adding loading states and improving the authentication flow
- **UI Consistency**: Standardized the logo and branding elements across all pages
- **Mobile Sidebar**: Updated to use shadcn/ui Sheet component for better reliability
- **Responsive Design**: Enhanced responsive layout, particularly for the hero section

## Project Structure

```
src/
├── components/           # UI components
│   ├── dashboard/        # Dashboard-specific components
│   ├── landing/          # Landing page components
│   ├── layout/           # Layout components (Navbar, Footer, etc.)
│   ├── profile/          # Profile-related components
│   └── ui/               # Base UI components (from shadcn/ui)
├── context/              # React context providers
├── hooks/                # Custom React hooks
├── integrations/         # Third-party integrations
├── lib/                  # Utility libraries
├── pages/                # Page components
│   ├── auth/             # Authentication pages
│   └── dashboard/        # Dashboard pages
└── services/             # API and service functions
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to the local development URL (typically http://localhost:3000)

## Authentication

The application uses Supabase Authentication with the following methods:
- Email/Password
- Google OAuth
- GitHub OAuth

### Troubleshooting Login Issues

If you encounter login issues:
- Make sure your Supabase project has the correct redirect URLs configured
- Check that email confirmations are set up properly
- Review browser console for any errors

## Deployment

The application is designed to be deployed to any static hosting service. Recommended options:
- Netlify
- Vercel
- GitHub Pages

## License

All rights reserved. This codebase is proprietary and confidential.
