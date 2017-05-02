var express = require('express');

var router = express.Router();

var db = require("../models");


router.get("/", function(req, res) {
  db.Burger.findAll({
  }).then(function(dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.Burger.create({burger_name: req.body.name}).then(function(dbBurger) {
    console.log(dbBurger);
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = {
    devoured: true
  }
  db.Burger.update(condition, {
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger) {
    console.log(dbBurger);
    res.redirect("/");
  });
});

module.exports = router;
