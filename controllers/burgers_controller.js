const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", async (req, res) => {
    const data = await burger.read();
    const hbsData = {
        burgers: data
    };
    res.render("index", hbsData);
});

router.get("/add", (req, res) => {
    res.render("add");
});

router.post("/api/burgers", async (req, res) => {
    //use object deconstruction to get variables
    const [{ name }, { adjective }, { bun }, { cheese }, { condiments }, { toppings }, { devoured }] = Array(8).fill(req.body);
    const newBurg = await burger.create(name, adjective, bun, cheese, condiments, toppings);
    res.sendStatus(200);
});

router.put("/api/burgers", async (req, res) => {
    const [{ devoured }, { id }] = Array(2).fill(req.body);
    console.log(devoured, id);
    const updatedBurg = await burger.update(["devoured"], [devoured], "id", id);
    res.sendStatus(200);
});

router.delete("/api/burgers/:id", async (req, res) => {
    const id = req.params.id;
    let deletedBurg = await burger.delete(id);
    res.sendStatus(200);
});

module.exports = router;