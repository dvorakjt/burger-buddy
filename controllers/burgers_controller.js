//require express and create the router
const express = require("express");
const router = express.Router();

//require the burger model
const burger = require("../models/burger");

router.get("/", async (req, res) => {
    //call the model's read function
    const data = await burger.read();
    //create an object with this data
    const hbsData = {
        burgers: data
    };
    //render the index handlebars page
    res.render("index", hbsData);
});

router.get("/add", (req, res) => {
    //render the add handlebars page
    res.render("add");
});

router.post("/api/burgers", async (req, res) => {
    //use object deconstruction to get variables
    const [{ name }, { adjective }, { bun }, { cheese }, { condiments }, { toppings }, { devoured }] = Array(8).fill(req.body);
    //call the model's create function
    const newBurg = await burger.create(name, adjective, bun, cheese, condiments, toppings);
    res.sendStatus(200);
});

router.put("/api/burgers", async (req, res) => {
    //get the devoured and id status from req.body
    const [{ devoured }, { id }] = Array(2).fill(req.body);
    //call the model's update function
    const updatedBurg = await burger.update(["devoured"], [devoured], "id", id);
    res.sendStatus(200);
});

//delete route
router.delete("/api/burgers/:id", async (req, res) => {
    //get the burger id from the params
    const id = req.params.id;
    // call the model's delete function
    let deletedBurg = await burger.delete(id);
    res.sendStatus(200);
});

module.exports = router;