const connection = require("../config/dbConnect");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const uuid = require("uuid");



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

          const timeUUID = uuid.v1();
          connection.query('SELECT * FROM recuriter WHERE email = ?', [email], async (err, results)=>{
            if(err){
              res.send({message:"Something wrong"})
            }
            else{
              if(results.length == 0){
                const query =
                "INSERT INTO recuriter (uuid,email, username, phoneNumber, password) VALUES (?, ?, ?, ?,?)";
              const values = [timeUUID,email, username, phoneNumber, hashpassword];
              connection.query(query, values, (error) => {
                if (error) {
                  res.send({
                    message: error,
                  });
                } else {
    
                  const secretkey = "tusafarmerahaituhimerimanzilterebinaaedilhaimuskil"
                  //crete jwt token
                  const token = jwt.sign({id:timeUUID},secretkey);
    
                  res.send({
                    message: "User is SignIn",
                    token:token
                  });
                }
              });
              }
              else{
                res.send({message:"Email already existed"});
              }
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

                const secretkey = "tusafarmerahaituhimerimanzilterebinaguzaraaedilhaimuskil"
                //crete jwt token
                const token = jwt.sign({id:user.uuid},secretkey);

                res.send({
                    message:"Welcome to dashboard",
                    token:token,
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

  // //User information controller
  // static userInformation =(req,res)=>{
  //   const {id,firstname,lastname,headline,description,currentcity,phoneNumber,secondarycity,dob,industry} = req.body;
  //   const photoPath = req.file.path;
  //   try{
  //     const insertQuery = 'INSERT INTO userinformation (id, firstname, lastname, headline, description, currentcity, phoneNumber, secondarycity, dob, industry, photoPath) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  //     connection.query(
  //       insertQuery,
  //       [id, firstname, lastname, headline, description, currentcity, phoneNumber, secondarycity, dob, industry, photoPath],
  //       (err, results) => {
  //         if (err) {
  //           res.send({ message: "Somethng error" });
  //         } else {
  //           res.send({ message: 'Upload successful' });
  //         }
  //       }
  //     );
  //   }

  //   catch(e){
  //     res.send({
  //       message:"Something wrong"
  //     });
  //   }
  // }

}




module.exports = UserController;
