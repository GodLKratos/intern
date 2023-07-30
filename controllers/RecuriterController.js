const connection = require("../config/dbConnect");
const bcrypt = require("bcryptjs");

class UserController {
  static signup = async (req, res) => {
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

          //hashing password
          const salt = await bcrypt.genSalt(10);
          const hashpassword = await bcrypt.hash(password,salt);


          const query =
            "INSERT INTO recuriter (email, username, phoneNumber, password) VALUES (?, ?, ?, ?)";
          const values = [email, username, phoneNumber, hashpassword];
          connection.query(query, values, (error) => {
            if (error) {
              res.send({
                message: error,
              });
            } else {
              res.send({
                message: "Recuriter is SignIn",
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

        connection.query('SELECT * FROM recuriter WHERE email = ?', [email], async (err, results) => {
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

            // check hashed password
            if(user!=null){
              const passmatch = await bcrypt.compare(password,user.password);
              if(passmatch){
                res.send({
                    message:"Welcome to dashboard",
                })
            }
            else{
              res.send({
                  message:"Wrong credential"
              })
          }
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
