var express = require('express');
var router = express.Router();
var Data = require("../models/getData_model");

router.get("/:id?", function (req, res, next) {
    if (!req.params.id) {
        Data.getAllData(function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });

    } else {

        Data.getDataById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });

    }
});

router.put("/", function (req, res, next) {
    Data.updateData(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
})
router.post("/", function (req, res, next) {
    console.log("ROute:", req.body)
    Data.addAllData(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.delete("/", function (req, res, next) {
    Data.deleteData(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    })
});
// router.get("/", (req, res) => {
//   res.send("Hello World App Engine");
// });

module.exports = router;

