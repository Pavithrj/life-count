# 🧮 Age Calculator Application

A clean and intuitive Age Calculator built with **ReactJS** and **Tailwind CSS**, offering users an easy way to calculate their exact age in years, months, and days. It’s optimized for responsive design, smooth interactions, and delivers a modern user experience with minimal effort.

Created as a **frontend-only** project, this app focuses on precise date calculations, stylish UI, and accessibility.

---

## 📁 Table of Contents

- [🧮 Age Calculator Application](#-age-calculator-application)
  - [📁 Table of Contents](#-table-of-contents)
  - [🔗 Live Demo](#-live-demo)
  - [⚙️ Key Features](#️-key-features)
  - [🧰 Technologies Used](#-technologies-used)
  - [🚀 Getting Started](#-getting-started)
    - [📦 Prerequisites](#-prerequisites)
    - [🧰 Installation Steps](#-installation-steps)
  - [📜 Available Scripts](#-available-scripts)
  - [📂 Project Structure](#-project-structure)
  - [🎞️ Custom Animations with Tailwind](#️-custom-animations-with-tailwind)
  - [🖼️ Application Screenshots](#️-application-screenshots)
    - [📱 Responsive View](#-responsive-view)
    - [🎯 Age Result Display](#-age-result-display)
  - [💡 Meta / Inspiration](#-meta--inspiration)
  - [🏷️ Branding \& Favicon](#️-branding--favicon)
  - [🚄 Performance](#-performance)
  - [🌍 Deployment](#-deployment)

---

## 🔗 Live Demo

[🎉 Give It a Spin!](https://your-live-demo-link.com)

---

## ⚙️ Key Features

- 📅 Input date of birth using date picker
- 🎯 Get exact age in years, months, and days
- ⏱️ Real-time age calculation
- ❌ Form validation for empty or invalid inputs
- 📱 Fully responsive and mobile-friendly layout
- ✨ Clean animations and transitions with Tailwind CSS

---

## 🧰 Technologies Used

- ⚛️ **ReactJS** – Frontend library for building UI
- 🌬️ **Tailwind CSS** – Utility-first CSS framework
- ⚡ **Vite** – Lightning-fast build tool
- 📜 **JavaScript** – Core language

---

## 🚀 Getting Started

### 📦 Prerequisites

Ensure you have **Node.js** and **npm** installed on your system.

### 🧰 Installation Steps

```bash
git clone https://github.com/your-username/age-calculator-react.git
cd age-calculator-react
npm install
npm run dev
```

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` – Runs the app in development mode
- `npm run build` – Builds the app for production
- `npm run preview` – Previews the production build

---

## 📂 Project Structure

```
src/
├── assets/
│   └── AgeCalculatorLogo.png
├── components/
│   └── AgeCalculator.jsx
├── App.jsx
├── index.css
├── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🎞️ Custom Animations with Tailwind

Tailwind custom animations used in the UI:

```js
extend: {
  animation: {
    'fade-in': 'fadeIn 0.5s ease-in-out',
    'slide-up': 'slideUp 0.3s ease-out'
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideUp: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    }
  }
}
```

---

## 🖼️ Application Screenshots

### 📱 Responsive View
![Responsive View](./screenshots/responsive.png)

### 🎯 Age Result Display
![Result](./screenshots/result.png)

---

## 💡 Meta / Inspiration

This project was built to enhance proficiency with ReactJS and Tailwind CSS while solving a real-world problem: calculating accurate age breakdowns with ease.

---

## 🏷️ Branding & Favicon

Includes a custom **Age Calculator** logo and favicon for a personalized branding experience.

---

## 🚄 Performance

Powered by **Vite** and optimized Tailwind builds to ensure minimal bundle size and fast load times.

---

## 🌍 Deployment

Deployed with **GitHub Pages**, enabling quick sharing and testing on the web.

---

> 🧮 Built with React + Tailwind — making age calculation sleek, stylish, and simple.