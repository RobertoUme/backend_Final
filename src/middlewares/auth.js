const jwt = require("jsonwebtoken");
const { promisify } = require("../config/auth");

const authConfig = require("../config/auth");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.autorization;
  console.log(req.headers.autorization);

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }
  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    console.log(decoded);

    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid" });
  }
};
