const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Use routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter); // <---- Make sure this is included!

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
