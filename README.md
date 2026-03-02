# BiteSpeed Identity Reconciliation – Frontend

This is the frontend application for the BiteSpeed Identity Reconciliation assignment.

It is built using:

- React (Vite)
- Tailwind CSS
- Axios
- React Toastify
- Render (Deployment)

------------------------------------------------------------

## 🚀 Live Application

Frontend URL:
https://bitespeed-frontend-4bgd.onrender.com

Backend API:
https://bitespeed-backend-e8s5.onrender.com

------------------------------------------------------------

## 🧠 Features

- Identify contact using Email and/or Phone Number
- Displays:
  - Primary Contact ID
  - All Emails
  - All Phone Numbers
  - Secondary Contact IDs
- Input validation before API call
- Toast notifications for:
  - Success responses
  - Validation errors
  - Server errors
  - Cold start delay (Render free tier)
- Clean and responsive UI using Tailwind CSS
- Fully deployed on Render

------------------------------------------------------------

## 🏗️ Project Structure

src/
│
├── api/
│   └── api.js
│
├── components/
│   ├── IdentifyForm.jsx
│   └── ResultCard.jsx
│
├── App.jsx
├── main.jsx
├── index.css

------------------------------------------------------------

## ⚙️ Environment Setup

Create a .env file in the root directory:

VITE_API_BASE_URL=https://bitespeed-backend-e8s5.onrender.com

IMPORTANT:
Do NOT commit .env file to GitHub.

------------------------------------------------------------

## 🖥️ Local Development

Clone repository:

git clone https://github.com/GauravNaike/biteSpeed-frontend.git
cd biteSpeed-frontend

Install dependencies:

npm install

Start development server:

npm run dev

Application will run at:

http://localhost:5173

------------------------------------------------------------

## 🧪 Testing Scenarios

1) Validation Test
Leave both fields empty → Click Identify  
Expected: Warning toast message.

2) Successful API Call
Enter valid email or phone → Click Identify  
Expected:
- Success toast message
- Contact details displayed

3) Cold Start (Render Free Tier)
If backend is inactive, the first request may take 40–60 seconds.  
A toast message informs the user that the server is waking up.

------------------------------------------------------------

## 🌍 Deployment

Frontend deployed using:
- Render Static Site
- Auto deploy from GitHub main branch

Build Command:
npm run build

Publish Directory:
dist

------------------------------------------------------------

## 🧾 Tech Stack

- React 18
- Vite
- Tailwind CSS
- Axios
- React Toastify
- Render (Hosting)

------------------------------------------------------------

## 👨‍💻 Author

Gaurav Naike  
Full Stack Developer (React + Spring Boot + PostgreSQL)