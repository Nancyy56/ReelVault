# ReelVault

ReelVault is a React + Vite frontend with a small Express backend for fetching Instagram reel media data through a third-party API. The UI is branded as ReelVault and provides a simple flow for pasting a reel link, fetching the video, previewing the result, and downloading it.

## Features

- Paste an Instagram reel URL
- Request reel data through the backend API
- Preview the returned reel video
- Download the video from the result section
- Responsive frontend branding for ReelVault

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express, Axios, CORS, dotenv

## Project Structure

- Frontend/ - React application
- Backend/ - Express API server

## Deployment

ReelVault is deployed with:

- Frontend: https://reel-vault-eight.vercel.app/
- Backend: https://reelvault-1.onrender.com/

For Vercel, point the project at the `Frontend/` directory as the root.
That lets Vercel use the frontend build and the `Frontend/vercel.json` rewrites.

The frontend calls the backend through `/api/get-reel`.
On Vercel, the request is rewritten to the Render service.
In local development, Vite proxies `/api` to the same backend.

## Prerequisites

- Node.js 18 or newer
- npm
- A valid API key for the external reel API used by the backend

## Environment Variables

Create a Backend/.env file with:

- PORT=5000
- API_KEY=your_api_key_here

The backend reads PORT for the server port and API_KEY for the upstream request.

The frontend does not require an API environment variable because it uses `/api/get-reel` with Vercel rewrites and a Vite proxy.

## Install

From the repository root:

1. Install backend dependencies:
   cd Backend
   npm install

2. Install frontend dependencies:
   cd ../Frontend
   npm install

## Run Locally

### Backend

Start the backend from the Backend folder:

node app.js

The backend exposes:

- GET / - health check
- POST /get-reel - accepts a JSON body with url

### Frontend

Start the frontend from the Frontend folder:

npm run dev -- --host

By default the Vite app runs on http://localhost:5173.

## Available Frontend Scripts

Inside Frontend/:

- npm run dev - start the Vite development server
- npm run build - build the production bundle
- npm run preview - preview the production build
- npm run lint - run ESLint

## Notes

- The frontend now uses `/api/get-reel` instead of a hardcoded backend URL.
- No backend logic was changed for branding updates; only visible labels and copy were updated.

## Live Setup

Typical production flow:

1. Vercel serves the React frontend.
2. Render serves the Express backend.
3. The frontend sends reel URLs to the `/api/get-reel` route, which Vercel rewrites to Render.

Live links:

- Frontend: https://reel-vault-eight.vercel.app/
- Backend API: https://reelvault-1.onrender.com/

## Branding

ReelVault is presented as the product name throughout the frontend.

Built by Nancy Yadav.
