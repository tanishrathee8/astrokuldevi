# AstroKuldevi

### Astrology Consultation App — By M.K. Sharma

AstroKuldevi is a mobile application developed for **M.K. Sharma** to provide users with astrology-related guidance, consultation requests, and direct communication.

The application combines a premium spiritual-themed interface with a backend-powered consultation system, allowing enquiries to be stored securely and forwarded through email notifications.

---

## 📱 Features

- ✨ Premium astrology-focused mobile UI
- 🏠 Home screen with AstroKuldevi branding
- 🔮 Astrology guidance and informational sections
- 🌙 Rhythm section
- 🧭 Guidance section
- 📋 Consultation request form
- 📅 Birth date, birth time and place collection
- 📧 Automatic consultation enquiry emails
- 📞 Direct phone calling
- 💬 WhatsApp integration
- 🗄️ Supabase database integration
- ⚡ Supabase Edge Function for server-side email processing
- 📱 Android production build using EAS
- 🔐 Environment-based configuration for sensitive credentials

---

## 🛠️ Tech Stack

### Mobile Application

- React Native
- Expo
- Expo Router
- TypeScript
- JavaScript / JSX
- React Native Safe Area Context

### Backend

- Supabase
- PostgreSQL
- Supabase Edge Functions
- Deno

### Email

- Resend API

### Development & Deployment

- Git
- GitHub
- VS Code
- EAS Build
- Android

---

## 🏗️ Application Architecture

```text
                    ┌──────────────────────┐
                    │   AstroKuldevi App   │
                    │    React Native      │
                    └──────────┬───────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
        Home Screen        Rhythm /          Guidance
                           Astrology
             │
             ▼
       Consultation Form
             │
             ▼
        Supabase Database
             │
             ▼
      Supabase Edge Function
             │
             ▼
          Resend API
             │
             ▼
      Consultation Email
```
