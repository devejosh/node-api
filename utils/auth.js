//Imports
const jwswebtoken = require ('jsonwebtoken')
const config = require('../config/config')

class Auth
{   
    static genToken(user) {
        return jwswebtoken.sign(user, config.jwtSecret, {expiresIn: '1h'})  
    }

    static verifyToken(){
        return jwswebtoken.verify(token, config.jwtSecret)
    }
}

module.exports = Auth; 

/*  Explanation
================ 

static generateToken(user): This method generates a JWT.
    user: The payload for the JWT, typically an object containing user details.
    
    jwt.sign(user, config.jwtSecret, { expiresIn: '1h' }):
        jwt.sign(): Function from the jsonwebtoken library that creates a JWT.
        user: The payload to include in the JWT.
        config.jwtSecret: The secret key used to sign the token.
        { expiresIn: '1h' }: Options object specifying that the token should expire in 1 hour. You can adjust the expiration time as needed.


    static verifyToken(token):
        This method verifies a JWT to ensure it is valid and has not been tampered with.
        token: The JWT to verify.
        jwt.verify(token, config.jwtSecret):
            jwt.verify(): Function from the jsonwebtoken library that verifies the token.
            token: The JWT to verify.
            config.jwtSecret: The secret key used to verify the token.
        If the token is valid, jwt.verify() returns the decoded payload. If the token is invalid or expired, it throws an error.

    Exporting the Class

    module.exports = Auth;: Exports the Auth class so it can be imported and used in other parts of the application.

*/