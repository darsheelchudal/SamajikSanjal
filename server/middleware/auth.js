import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Access denied");
    }
    const verified = jwt.token(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.send(500).json({ error: error.message });
  }
};
