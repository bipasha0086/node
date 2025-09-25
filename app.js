const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware to parse JSON body (not mandatory for this example but good practice)
app.use(express.json());

// In-memory seat data
const seats = {
  1: { status: "available", lockTimer: null },
  2: { status: "available", lockTimer: null },
  3: { status: "available", lockTimer: null },
  4: { status: "available", lockTimer: null },
  5: { status: "available", lockTimer: null },
};

const clearLock = (seatId) => {
  if (seats[seatId].lockTimer) {
    clearTimeout(seats[seatId].lockTimer);
    seats[seatId].lockTimer = null;
  }
};

// Serve static files from 'public' folder (we will create it next)
app.use(express.static(path.join(__dirname, "public")));

// API: Get seat statuses
app.get("/api/seats", (req, res) => {
  const seatStatus = {};
  for (const seatId in seats) {
    seatStatus[seatId] = seats[seatId].status;
  }
  res.json(seatStatus);
});

// API: Lock a seat
app.post("/api/lock/:seatId", (req, res) => {
  const seatId = req.params.seatId;
  if (!seats[seatId]) {
    return res.status(404).json({ message: "Seat does not exist" });
  }
  if (seats[seatId].status === "booked") {
    return res.status(400).json({ message: "Seat already booked" });
  }
  if (seats[seatId].status === "locked") {
    return res.status(400).json({ message: "Seat already locked" });
  }

  seats[seatId].status = "locked";
  seats[seatId].lockTimer = setTimeout(() => {
    seats[seatId].status = "available";
    seats[seatId].lockTimer = null;
    console.log(`Lock expired for seat ${seatId}`);
  }, 60 * 1000);

  res.json({ message: `Seat ${seatId} locked successfully. Confirm within 1 minute.` });
});

// API: Confirm booking
app.post("/api/confirm/:seatId", (req, res) => {
  const seatId = req.params.seatId;
  if (!seats[seatId]) {
    return res.status(404).json({ message: "Seat does not exist" });
  }
  if (seats[seatId].status !== "locked") {
    return res.status(400).json({ message: "Seat is not locked and cannot be booked" });
  }
  seats[seatId].status = "booked";
  clearLock(seatId);
  res.json({ message: `Seat ${seatId} booked successfully!` });
});

// Serve the front-end HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
