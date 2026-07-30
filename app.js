const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set Pug as the view engine
app.set("view engine", "pug");

// Tell Express where the Pug files are
app.set("views", __dirname);

// Serve static files like CSS
app.use(express.static(__dirname));

// Home route
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});