const path = require("path");
const timeOut = (req, res, next) => {
  var today = new Date();
  if (
    today.getHours > 8 &&
    today.getHours < 18 &&
    today.getDay != 0 &&
    today.getDay != 6
  ) {
    next();
  } else {
    res.sendFile(path.join(__dirname, `../views/timeout.html`));
  }
};
module.exports = timeOut;
