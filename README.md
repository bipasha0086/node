# CLI Employee Management System (Node.js)

A simple **Command Line Interface (CLI)** application built with Node.js that manages employees **in memory** using arrays.  
You can **add, list, and remove employees** interactively from the terminal.

---

## 📌 Features
- Add a new employee (Name + ID).
- List all employees.
- Remove an employee by ID.
- Stores data **only in memory** (no database, no file).

---

## 📂 Project Structure
employee-management/
│
├── employee-management.js # Main application file
└── README.md # Documentation




# 🎴 Playing Card REST API with Express.js + Frontend

This project is a **Node.js + Express.js REST API** to manage a collection of playing cards, combined with a **frontend (HTML + JavaScript)** in a **pink & light purple theme** 🎨 so you can test the API directly in your browser.

---

## 📌 Features
- RESTful API with **GET, POST, DELETE**
- In-memory card collection (no database required)
- Simple **frontend UI** to test API
- Beautiful **pink + purple theme**

---

## 📂 Project Structure
card-api/
├── server.js # Express.js backend
├── package.json # Project config
├── public/
│ └── index.html # Frontend (pink + purple theme)


---

## 🚀 Setup & Run

1. **Initialize project**  
   ```bash
   mkdir card-api
   cd card-api
   npm init -y
   npm install express


# Screenshots

![Screenshot 1](Screenshot%202025-09-25%20213019.png)

![Screenshot 2](Screenshot%202025-09-25%20213035.png)

![Screenshot 3](Screenshot%202025-09-25%20213052.png)

![Screenshot 4](Screenshot%202025-09-25%20213108.png)


# Concurrent Ticket Booking System with Seat Locking and Confirmation

This project is a simple **ticket booking system** built with **Node.js** and **Express.js**, featuring a front-end UI to view, lock, and confirm seat bookings in real-time. It simulates a seat reservation system that handles concurrency by implementing seat locking and automatic lock expiration.

---

## Features

- View seat availability status in real-time.
- Lock seats to temporarily reserve them (lock expires after 1 minute).
- Confirm locked seats to finalize the booking.
- Prevent double booking through seat locking.
- User-friendly browser interface with clear color-coded seat statuses:
  - **Green**: Available
  - **Blue**: Locked
  - **Gray**: Booked

---

## Installation

1. Clone or download this repository.

2. Open the project folder in your terminal.

3. Initialize the project and install dependencies:

   ```bash
   npm init -y
   npm install express
Make sure you have the following structure:

/project-folder
├── app.js
└── public
    └── index.html

Running the Application

Start the server by running:

node app.js

## Screenshot

<img width="1920" height="1128" alt="image" src="https://github.com/user-attachments/assets/7a95b321-4989-48d6-9587-7c7004ab065c" />
