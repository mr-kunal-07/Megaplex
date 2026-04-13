# Megaplex Frontend

A modern web application built with **Next.js 14** and **React 18**, featuring Firebase authentication and Firestore database integration for managing dynamic content.

## 🌟 Features

- ⚡ **Next.js 14** - Latest React framework with App Router
- 🔐 **Firebase Authentication** - Secure user login and registration
- 🗄️ **Firestore Database** - Real-time data management
- 📱 **Responsive Design** - Mobile-first approach
- 🔄 **ISR (Incremental Static Regeneration)** - Optimized page revalidation for better performance
- 🖼️ **Image Optimization** - Integrated with Unsplash for media assets
- 🎯 **Admin Console** - Administrative panel for content management

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2.0
- **Library:** React 18.2.0
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Styling:** CSS (Global styles)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- A **Firebase account** (for configuration)

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd megaplex
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory (if needed for additional configurations):
   ```bash
   # Firebase config is already configured in lib/firebase.js
   # Add any additional environment variables here
   ```

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
megaplex/
├── app/                      # Next.js app directory
│   ├── admin/               # Admin pages
│   │   ├── init/           # Admin initialization
│   │   └── login/          # Admin login
│   ├── page.jsx            # Home page (Server Component with ISR)
│   ├── layout.jsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   └── HomeClient.js       # Client-side home component
├── lib/
│   ├── api.js              # API utilities
│   ├── firebase.js         # Firebase configuration & initialization
│   └── defaultContent.js   # Default content settings
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

## 🔧 Configuration

### Firebase Setup

The Firebase configuration is already set up in `lib/firebase.js`. It includes:

- **Firestore Database** - For storing application data
- **Firebase Auth** - For user authentication

The configuration connects to the `task-d72fd` Firebase project.

### Next.js Configuration

Custom configurations in `next.config.js`:

- Image domain whitelisting for Unsplash integration
- Optimized image loading

## 📄 Pages

| Route          | Description                                  |
| -------------- | -------------------------------------------- |
| `/`            | Home page with dynamic content (ISR enabled) |
| `/admin/login` | Admin login page                             |
| `/admin/init`  | Admin initialization page                    |
| `/admin`       | Admin dashboard                              |

## 🔐 Security Notes

⚠️ **Important:** The Firebase configuration in `lib/firebase.js` contains your API keys. While these API keys are somewhat restricted, consider:

- Using Firebase rules to restrict database access
- Never commit sensitive environment variables to version control
- Use `.env.local` for truly sensitive data
- Implement proper authentication flows

## 📦 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm start`     | Start production server  |

## 🌐 Features Overview

### Home Page

- Server-side rendered with incremental static regeneration (ISR)
- Revalidates every 10 seconds
- Dynamically loads content from API
- Client-side component for interactivity

### Admin Panel

- Secure login/authentication
- Initialization flow
- Content management capabilities

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📝 License

This project is private. All rights reserved.

---

**Last Updated:** April 2026

For questions or support, please reach out to the development team.
