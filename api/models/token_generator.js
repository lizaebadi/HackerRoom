const JWT = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

class TokenGenerator {
  static jsonwebtoken(user_id) {
    return JWT.sign({
      user_id: user_id,
      iat: Math.floor(Date.now() / 1000),
      
      // Set the JWT token to expire in 1 hour
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 6)
    }, secret);
  }
}

module.exports = TokenGenerator;