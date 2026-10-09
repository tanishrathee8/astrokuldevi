# AstroKuldevi

**Astrology Consultation App — By M.K. Sharma**

AstroKuldevi is a mobile application built with React Native and Expo to provide astrology-related guidance and consultation requests. It combines a premium spiritual-themed interface with a backend-powered enquiry system using Supabase and Resend.

## Features

- Premium astrology-inspired mobile interface
- Home screen with AstroKuldevi branding
- Rhythm and Guidance sections
- Consultation request form
- Date, time, and place of birth collection
- Form validation and consent handling
- Supabase database integration for consultation enquiries
- Supabase Edge Function for email notifications
- Direct phone calling and WhatsApp integration
- Android builds using Expo Application Services (EAS)

## Technology Stack

**Mobile application**

- React Native
- Expo and Expo Router
- TypeScript
- React Native Safe Area Context
- Native date and time picker

**Backend and email**

- Supabase PostgreSQL
- Supabase Edge Functions
- Deno
- Resend API

**Development and deployment**

- Node.js and npm
- Git and GitHub
- Visual Studio Code
- EAS Build

## Application Architecture

```text
AstroKuldevi Mobile App
        |
        +-- Home Screen
        +-- Rhythm Section
        +-- Guidance Section
        |
        +-- Consultation Form
                  |
                  v
           Supabase Database
                  |
                  v
        Supabase Edge Function
                  |
                  v
              Resend API
                  |
                  v
       Consultation Email Notification
```

## Getting Started

### Prerequisites

Install the following before running the application:

- Node.js and npm
- Git
- Expo-compatible development environment
- A Supabase project for backend functionality

### Installation

Clone the repository:

```bash
git clone https://github.com/tanishrathee8/astrokuldevi.git
cd astrokuldevi
```

Install dependencies:

```bash
npm install
```

### Environment Configuration

Create a local `.env` file in the project root:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_KEY=your_supabase_anon_or_publishable_key
```

Use only the Supabase client key intended for public application use. Never put a Supabase service-role key or the Resend API key in the mobile application's environment variables.

The Resend API key belongs in the Supabase Edge Function's server-side secrets:

```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key
```

Do not commit `.env` files or real API keys to version control.

### Run the Application

Start the Expo development server:

```bash
npx expo start
```

Follow the Expo CLI instructions to open the app in a compatible development environment.

## Consultation Workflow

1. The user completes the consultation form.
2. The app validates the submitted information.
3. The enquiry is inserted into the Supabase `enquiries` table.
4. The app invokes the `send-enquiry-email` Edge Function.
5. The function validates the request and sends an email through Resend.

**Important:** Saving an enquiry and sending its notification email are separate operations. An email failure does not necessarily mean the database insert failed.

## Deployment

The Android application can be built using Expo Application Services (EAS). Configure the appropriate EAS environment variables and build profile before generating a release build.

The email notification function is deployed separately to Supabase:

```bash
supabase functions deploy send-enquiry-email
```

Review the function's authentication, access control, and abuse protection settings before production deployment. Never expose server-side secrets in the mobile application.

## Project Structure

```text
astrokuldevi/
├── src/
│   ├── app/
│   │   ├── index.tsx
│   │   ├── rhythm.tsx
│   │   ├── guidance.tsx
│   │   └── consultation.tsx
│   └── lib/
│       └── supabase.ts
├── supabase/
│   └── functions/
│       └── send-enquiry-email/
│           └── index.ts
├── assets/
├── app.json
├── package.json
└── README.md
```

## Security Notes

- Keep `.env` files out of Git.
- Store Resend credentials in Supabase Edge Function secrets.
- Use a public client key in the mobile app, not a service-role key.
- Configure appropriate database Row Level Security policies.
- Protect public Edge Function endpoints against automated abuse.
- Avoid logging personal consultation details or sensitive credentials.

## Maintainer

**M.K. Sharma** — Astrology consultation service.

**Application repository:** [AstroKuldevi on GitHub](https://github.com/tanishrathee8/astrokuldevi)

---

Built with React Native, Expo, Supabase, and Resend.
