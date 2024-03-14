// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();
const cors = require("cors")

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

app.use(cors({
    // Add the URLs of allowed origins to this array
    origin: ['http://localhost:5173', 'http://localhost:5174', "https://gravity-tribe.vercel.app/"],
  }))

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const eventsRoutes = require("./routes/events.routes");
app.use("/api", eventsRoutes);

const parksRoutes = require("./routes/parks.routes");
app.use("/api", parksRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/api", userRoutes);

const workoutsRoutes = require("./routes/workouts.routes");
app.use("/api", workoutsRoutes);

const postsRoutes = require("./routes/posts.routes");
app.use("/api", postsRoutes);

const messageRoutes = require('./routes/message.routes');
app.use('/api', messageRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
