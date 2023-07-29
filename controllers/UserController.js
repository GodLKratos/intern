const connection = require("../config/dbConnect");

class UserController {
  static signup = (req, res) => {
    const { email, username, phoneNumber, password, confirmPassword } =
      req.body;
    try {
      if (
        email != null &&
        username != null &&
        phoneNumber != null &&
        password != null &&
        confirmPassword != null
      ) {
        if (password == confirmPassword) {
          const query =
            "INSERT INTO users (email, username, phoneNumber, password) VALUES (?, ?, ?, ?)";
          const values = [email, username, phoneNumber, password];
          connection.query(query, values, (error) => {
            if (error) {
              res.send({
                message: error,
              });
            } else {
              res.send({
                message: "User is SignIn",
              });
            }
          });
        } else {
          res.send({
            message: "Password and confirm password not equal",
          });
        }
      } else {
        res.send({
          message: "All field are required",
        });
      }
    } catch (e) {
      res.send({
        message: "Something wrong",
      });
    }
  };

  static login = (req, res) => {
    const { email, password } = req.body;
    try {
      if (email != null && password != null) {

        connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
              console.error('Error executing the query:', err);
              res.send({
                message:"Server error"
              })
            }
        
            if (results.length === 0) {
              res.send({
                message:"Wrong Credential"
              })
            }
        
            const user = results[0];
            console.log(user.password)
            if(password == user.password){
                res.send({
                    message:"Welcome to dashboard",
                })
            }
            else{
                res.send({
                    message:"Wrong credential"
                })
            }

        })
      }
    } catch (e) {
      res.send({
        message: e.message,
      });
    }
  };
}

module.exports = UserController;
