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
