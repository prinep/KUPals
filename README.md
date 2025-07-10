# KUPals  
A Web-Based Social Platform for Kathmandu University Students

## Project Overview

KUPals is a lightweight, web-based social platform designed specifically for students at Kathmandu University. In a university setting, students often lack a centralized platform for connecting over shared interests and organizing social and academic activities. KUPals bridges that gap by providing:

- Public interest groups (e.g., art, music, hiking, coding clubs)  
- Private groups for focused academic or social discussions  
- Real-time chat and notifications  
- Secure user authentication via Email/Google  
- Responsive UI built with React and Tailwind CSS  
- Scalable backend using Firebase services  

## Features

- **Public Interest Groups**: Discover and join groups based on interests  
- **Private Collaboration Groups**: Create invite-only groups for focused discussions  
- **Real-Time Chat & Notifications**  
- **User Authentication & Profiles**  
- **Privacy & Security** via Firebase Authentication and Firestore Security Rules  
- **Responsive UI** for mobile, tablet, and desktop  
- **Scalable Architecture** with Firebase  
- **Easy Maintenance** with React + Firebase stack  

## Technologies Used

### Frontend

- React.js  
- Next.js (App Router)  
- Tailwind CSS  
- Context API  

### Backend

- Firebase Authentication  
- Firestore  
- Firebase Storage  
- Firebase Hosting  
- Firebase Cloud Functions (future use)  

### Development Tools

- ESLint & Prettier  
- Jest & Firebase Emulator Suite  
- React DevTools  
- GitHub Actions (optional)  

## Setup and Installation

1. **Clone the Repository**

```bash
git clone https://github.com/YOUR_USERNAME/KUPals.git
cd KUPals

 2.   Install Dependencies

npm install
# or
yarn install

  3.  Set Up Firebase Project

    Go to Firebase Console

    Create a new Firebase project

    Add a web app to the project

    Copy your Firebase config object

  4.  Configure Environment Variables

Create a .env.local file in your project root and paste your Firebase config:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

5.    Configure Firebase Security Rules
    Refer to Firebase docs to manage access control for users and groups.

 6.   Run the Development Server

npm run dev
# or
yarn dev

Open your browser and go to:
http://localhost:3000
Usage

    Sign up or log in with Email/Google

    Explore and join public groups

    Create private groups for projects or friends

    Chat in real-time with group members

API Routes (App Router)

    /api/add: Example route (adds two numbers)

    Additional routes: Group management, messages, profile updates – integrated securely with Firebase

Contributing

  1.  Fork the repo

  2.  Create a new branch:

git checkout -b feature/your-feature-name

 3.   Make your changes and commit:

git commit -m "feat: Add new feature"

  4.  Push to your branch:

git push origin feature/your-feature-name

 5.   Open a Pull Request

License

This project is licensed under the MIT License. See LICENSE.md for details.
