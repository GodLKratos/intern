const connection = require("../config/dbConnect");


class UserResumeController{
      
    // personal information
    static personalinformation = (req, res) => {
        const { id, firstname, lastname, headline, currentcity, highestcarrerlevel, yearofexp, socialmedia } = req.body;

        try{
            const selectQuery = 'SELECT id FROM personalinformation WHERE id = ?';
      
            connection.query(selectQuery, [id], (err, results) => {
              if (err) {
                console.error('Error checking user existence:', err);
                res.send({ error: 'Internal server error' });
              } else {
                if (results.length === 0) {
                  const insertQuery = 'INSERT INTO personalinformation (id, firstname, lastname, headline, currentcity, highestcarrerlevel, yearofexp, socialmedia) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                  const data = [id, firstname, lastname, headline, currentcity, highestcarrerlevel, yearofexp, socialmedia];
                  connection.query(insertQuery, data, (err, result) => {
                    if (err) {
                      res.send({ message: err.message });
                    } else {
                      res.send({ message: 'done' });
                    }
                  });
                } else {
                  const updateQuery = 'UPDATE personalinformation SET firstname=?, lastname=?, headline=?, currentcity=?, highestcarrerlevel=?, yearofexp=?, socialmedia=? WHERE id=?';
                  const data = [firstname, lastname, headline, currentcity, highestcarrerlevel, yearofexp, socialmedia, id];
                  connection.query(updateQuery, data, (err, result) => {
                    if (err) {
                      res.send({ message: err.message });
                    } else {
                      res.send({ message: 'updated' });
                    }
                  });
                }
              }
            });
        }
        catch(e){
            res.send({message:e.message});
        }
      };


      //educational detail
      static educationaldetail = (req, res) => {
        const { id, levelofeducation, fieldofstudy, collegeuniversity, location, current, fromdate, todate } = req.body;

        try{
            const selectQuery = 'SELECT id FROM educationaldetails WHERE id = ?';
      
        connection.query(selectQuery, [id], (err, results) => {
          if (err) {
            console.error('Error checking user existence:', err);
            res.send({ error: 'Internal server error' });
          } else {
            if (results.length === 0) {
              const insertQuery = 'INSERT INTO educationaldetails (id, levelofeducation, fieldofstudy, collegeuniversity, location, current, fromdate, todate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
              const data = [id, levelofeducation, fieldofstudy, collegeuniversity, location, current, fromdate, todate];
              connection.query(insertQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'done' });
                }
              });
            } else {
              const updateQuery = 'UPDATE educationaldetails SET levelofeducation=?, fieldofstudy=?, collegeuniversity=?, location=?, current=?, fromdate=?, todate=? WHERE id=?';
              const data = [levelofeducation, fieldofstudy, collegeuniversity, location, current, fromdate, todate,id];
              connection.query(updateQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'updated' });
                }
              });
            }
          }
        });
        }
        catch(e){
            res.send({message:e.message})
        }
      };
      

      //skills
      static skills = (req, res) => {
        //send array of skills
        const { id,arrskills} = req.body;
       
        try{
            const jsonString = JSON.stringify(arrskills);
            const selectQuery = 'SELECT id FROM skills WHERE id = ?';
      
        connection.query(selectQuery, [id], (err, results) => {
          if (err) {
            console.error('Error checking user existence:', err);
            res.send({ error: 'Internal server error' });
          } else {
            if (results.length === 0) {
              const insertQuery = 'INSERT INTO skills (id, skills) VALUES (?, ?)';
              const data = [id, jsonString];
              connection.query(insertQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'done' });
                }
              });
            } else {
              const updateQuery = 'UPDATE skills SET skills=? WHERE id=?';
              const data = [jsonString,id];
              connection.query(updateQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'updated' });
                }
              });
            }
          }
        });
        }
        catch(e){
            res.send({message:e.message});
        }
      };

      
      //experience
      static experience = (req, res) => {
        const { id,jobtitle,jobcompany,joblocation,jobcurrent,jobfromdate,jobtodate,jobpartfull,jobdescription,interntitle,interncompany,internlocation,interncurrent,internfromdate,interntodate,internpartfull,interndescription} = req.body;
       
        try{
            const selectQuery = 'SELECT id FROM experience WHERE id = ?';
      
        connection.query(selectQuery, [id], (err, results) => {
          if (err) {
            console.error('Error checking user existence:', err);
            res.send({ error: 'Internal server error' });
          } else {
            if (results.length === 0) {
              const insertQuery = 'INSERT INTO experience (id, jobtitle,jobcompany,joblocation,jobcurrent,jobfromdate,jobtodate,jobpartfull,jobdescription,interntitle,interncompany,internlocation,interncurrent,internfromdate,interntodate,internpartfull,interndescription) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
              const data = [id, jobtitle,jobcompany,joblocation,jobcurrent,jobfromdate,jobtodate,jobpartfull,jobdescription,interntitle,interncompany,internlocation,interncurrent,internfromdate,interntodate,internpartfull,interndescription];
              connection.query(insertQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'done' });
                }
              });
            } else {
              const updateQuery = 'UPDATE experience SET jobtitle=?,jobcompany=?,joblocation=?,jobcurrent=?,jobfromdate=?,jobtodate=?,jobpartfull=?,jobdescription=?,interntitle=?,interncompany=?,internlocation=?,interncurrent=?,internfromdate=?,interntodate=?,internpartfull=?,interndescription=? WHERE id=?';
              const data = [jobtitle,jobcompany,joblocation,jobcurrent,jobfromdate,jobtodate,jobpartfull,jobdescription,interntitle,interncompany,internlocation,interncurrent,internfromdate,interntodate,internpartfull,interndescription,id];
              connection.query(updateQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'updated' });
                }
              });
            }
          }
        });
        }
        catch(e){
            res.send({message:e.message});
        }
      };


      //certification
      static certification = (req, res) => {
        const { id,title ,valid,fromdate,todate,description} = req.body;
       
        try{
            const selectQuery = 'SELECT id FROM certification WHERE id = ?';
      
        connection.query(selectQuery, [id], (err, results) => {
          if (err) {
            console.error('Error checking user existence:', err);
            res.send({ error: 'Internal server error' });
          } else {
            if (results.length === 0) {
              const insertQuery = 'INSERT INTO certification (id,title ,valid,fromdate,todate,description) VALUES (?, ?,?,?,?,?)';
              const data = [id, title ,valid,fromdate,todate,description];
              connection.query(insertQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'done' });
                }
              });
            } else {
              const updateQuery = 'UPDATE certification SET title=?,valid=?,fromdate=?,todate=?,description=? WHERE id=?';
              const data = [title ,valid,fromdate,todate,description,id];
              connection.query(updateQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'updated' });
                }
              });
            }
          }
        });
        }
        catch(e){
            res.send({message:e.message});
        }
      };

      //patents
      static patents = (req, res) => {
        const { id,title ,url,patentnumber,awarddate,description} = req.body;
       
        try{
            const selectQuery = 'SELECT id FROM patent WHERE id = ?';
      
        connection.query(selectQuery, [id], (err, results) => {
          if (err) {
            console.error('Error checking user existence:', err);
            res.send({ error: 'Internal server error' });
          } else {
            if (results.length === 0) {
              const insertQuery = 'INSERT INTO patent (id,title ,url,patentnumber,awarddate,description) VALUES (?, ?,?,?,?,?)';
              const data = [id,title ,url,patentnumber,awarddate,description];
              connection.query(insertQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'done' });
                }
              });
            } else {
              const updateQuery = 'UPDATE patent SET title=?,url=?,patentnumber=?,awarddate=?,description=? WHERE id=?';
              const data = [id,title ,url,patentnumber,awarddate,description];
              connection.query(updateQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'updated' });
                }
              });
            }
          }
        });
        }
        catch(e){
            res.send({message:e.message});
        }
      };


      static awards = (req, res) => {
        const { id,title,awarddate,description} = req.body;
       
        try{
            const selectQuery = 'SELECT id FROM award WHERE id = ?';
      
        connection.query(selectQuery, [id], (err, results) => {
          if (err) {
            console.error('Error checking user existence:', err);
            res.send({ error: 'Internal server error' });
          } else {
            if (results.length === 0) {
              const insertQuery = 'INSERT INTO award (id,title,awarddate,description) VALUES (?, ?,?,?)';
              const data = [id,title,awarddate,description];
              connection.query(insertQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'done' });
                }
              });
            } else {
              const updateQuery = 'UPDATE award SET title=?,awarddate=?,description=? WHERE id=?';
              const data = [id,title,awarddate,description];
              connection.query(updateQuery, data, (err, result) => {
                if (err) {
                  res.send({ message: err.message });
                } else {
                  res.send({ message: 'updated' });
                }
              });
            }
          }
        });
        }
        catch(e){
            res.send({message:e.message});
        }
      };


}


module.exports = UserResumeController;