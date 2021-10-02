const express = require("express");
const app = express();
const timeOut = require("./middleware/timeOut");

app.use(timeOut);
app.use(express.json());
app.use(express.static("views"));

// app.get(`/`, (req, res) => {
//   res.sendFile(`${__dirname}/views/index.html`);
// });

// app.get(`/contact`, (req, res) => {
//   res.sendFile(`${__dirname}/views/contact.html`);
// });

// app.get(`/services`, (req, res) => {
//   res.sendFile(`${__dirname}/views/services.html`);
// });

const PORT = 8181;
app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
