const connection = require("../config/dbConnect");

class RecuriterProfileController {
  //company details
  static companydetail = (req, res) => {
    const { id, cname, numberofemp, fullname, role } = req.body;

    try {
      const selectQuery = "SELECT id FROM companydetail WHERE id = ?";
      connection.query(selectQuery, [id], (err, result) => {
        if (err) {
          res.send({ message: err.message });
        } else {
          if (result.length == 0) {
            const insertQuery =
              "INSERT INTO companydetail (id,cname,numberofemp,fullname,role) VALUES(?,?,?,?,?)";
            const data = [id, cname, numberofemp, fullname, role];
            connection.query(insertQuery, data, (err, result) => {
              if (err) {
                res.send({ message: err.msg });
              } else {
                res.send({ message: "done" });
              }
            });
          } else {
            const updateQuery =
              "UPDATE companydetail SET cname=?, numberofemp=?, fullname=?, role=? WHERE id=?";
            const data = [id, cname, numberofemp, fullname, role];
            connection.query(updateQuery, data, (err, result) => {
              if (err) {
                res.send({ message: err.message });
              } else {
                res.send({ message: "updated" });
              }
            });
          }
        }
      });
    } catch (e) {
      res.send({ message: e.message });
    }
  };

  //address
  static companyaddress = (req, res) => {
    const { id, street, area, city, pincode, state, country, location } =
      req.body;

    try {
      const selectQuery = "SELECT id FROM companyaddress WHERE id = ?";
      connection.query(selectQuery, [id], (err, result) => {
        if (err) {
          res.send({ message: err.message });
        } else {
          if (result.length == 0) {
            const insertQuery =
              "INSERT INTO companyaddress (id,street,area,city,pincode,state,country,location) VALUES(?,?,?,?,?,?,?,?)";
            const data = [
              id,
              street,
              area,
              city,
              pincode,
              state,
              country,
              location,
            ];
            connection.query(insertQuery, data, (err, result) => {
              if (err) {
                res.send({ message: err.msg });
              } else {
                res.send({ message: "done" });
              }
            });
          } else {
            const updateQuery =
              "UPDATE companyaddress SET street=?, area=?, city=?, pincode=?,state=?,country=?,location=? WHERE id=?";
            const data = [
              id,
              street,
              area,
              city,
              pincode,
              state,
              country,
              location,
            ];
            connection.query(updateQuery, data, (err, result) => {
              if (err) {
                res.send({ message: err.message });
              } else {
                res.send({ message: "updated" });
              }
            });
          }
        }
      });
    } catch (e) {
      res.send({ message: e.message });
    }
  };

  //basic information
  static basicinformation = (req, res) => {
    const {
      id,
      language,
      industry,
      subindustry,
      cdescription,
      jobtitle,
      jobdescription,
      category,
      jobtype,
      jobschedule,
      durationofjob,
      startdate,
      joiningdate,
      noofhire,
      urgenthire,
      howmuchurgent,
    } = req.body;

    try {
      const selectQuery = "SELECT id FROM basicinformation WHERE id = ?";
      connection.query(selectQuery, [id], (err, result) => {
        if (err) {
          res.send({ message: err.message });
        } else {
          if (result.length == 0) {
            const insertQuery =
              "INSERT INTO basicinformation (id,language,industry,subindustry,cdescription,jobtitle,jobdescription,category,jobtype,jobschedule,durationofjob,startdate,joiningdate,noofhire,urgenthire,howmuchurgent) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            const data = [
              id,
              language,
              industry,
              subindustry,
              cdescription,
              jobtitle,
              jobdescription,
              category,
              jobtype,
              jobschedule,
              durationofjob,
              startdate,
              joiningdate,
              noofhire,
              urgenthire,
              howmuchurgent,
            ];
            connection.query(insertQuery, data, (err, result) => {
              if (err) {
                res.send({ message: err.message });
              } else {
                res.send({ message: "done" });
              }
            });
          } else {
            const updateQuery =
              "UPDATE basicinformation SET language=?, industry=?, subindustry=?, cdescription=?,jobtitle=?,jobdescription=?,category=?,jobtype=?,jobschedule=?,durationofjob=?,startdate=?,joiningdate=?,noofhire=?,urgenthire=?,howmuchurgent=? WHERE id=?";
            const data = [
              id,
              language,
              industry,
              subindustry,
              cdescription,
              jobtitle,
              jobdescription,
              category,
              jobtype,
              jobschedule,
              durationofjob,
              startdate,
              joiningdate,
              noofhire,
              urgenthire,
              howmuchurgent,
            ];
            connection.query(updateQuery, data, (err, result) => {
              if (err) {
                res.send({ message: err.message });
              } else {
                res.send({ message: "updated" });
              }
            });
          }
        }
      });
    } catch (e) {
      res.send({ message: e.message });
    }
  };

  //salary detail
  static salarydetail = (req, res) => {
    const { id, paymentlim, amount, compensation, benefit, other } = req.body;

    try {
      const selectQuery = "SELECT id FROM salarydetail WHERE id = ?";
      connection.query(selectQuery, [id], (err, result) => {
        if (err) {
          res.send({ message: err.message });
        } else {
          if (result.length == 0) {
            const insertQuery =
              "INSERT INTO salarydetail (id,paymentlim,amount,compensation,benefit,other) VALUES(?,?,?,?,?,?)";
            const data = [id, paymentlim, amount, compensation, benefit, other];
            connection.query(insertQuery, data, (err, result) => {
              if (err) {
                res.send({ message: err.msg });
              } else {
                res.send({ message: "done" });
              }
            });
          } else {
            const updateQuery =
              "UPDATE salarydetail SET paymentlim=?, amount=?, compensation=?, benefit=?,other=?  WHERE id=?";
            const data = [id, paymentlim, amount, compensation, benefit, other];
            connection.query(updateQuery, data, (err, result) => {
              if (err) {
                res.send({ message: err.message });
              } else {
                res.send({ message: "updated" });
              }
            });
          }
        }
      });
    } catch (e) {
      res.send({ message: e.message });
    }
  };
}

module.exports = RecuriterProfileController;
