var express = require("express");
var router = express.Router();
const sql = require("mysql2");

const pool = sql.createPool({
  host: "localhost",
  user: "root",
  password: "mypython",
  database: "HostAndServe",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

router.get("/", function(req, res, next) {
  pool.query(`SELECT * FROM Servers`, (err, rows, fields) => {
    res.send(rows);
  });
});
router.post("/", function(req, res, next) {
  //console.log(JSON.parse(Object.keys(req.body)[0]));
  //const body = JSON.parse(Object.keys(req.body)[0]);
  pool.query(
    `INSERT INTO Servers (Alias, ip, creationDate, HostingId) VALUES ('${
      req.body.name
    }', ${req.body.ip}, STR_TO_DATE(${req.body.hostingId}, '%y-%m-%d'), ${
      req.body.hostingId
    })
    `
  );
  res.send("done");
});
router.delete("/:id", function(req, res, next) {
  console.log(req.params.id);
  pool.query(`DELETE FROM Servers WHERE id = ${req.params.id};`);
  res.send("DELETED");
});

module.exports = router;
