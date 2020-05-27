const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", async (req, res) => {
    const data = await burger.read();
    const hbsData = {
        burgers: data
    };
    console.log(hbsData);
    res.render("index", hbsData);
});

router.post("/api/burgers", async (req, res) => {
    //use object deconstruction to get variables
    const [{ name }, { adjective }, { bun }, { cheese }, { condiments }, { toppings }, { devoured }] = Array(8).fill(req.body);
    const newBurg = await burger.create(name, adjective, bun, cheese, condiments, toppings);
    res.redirect("/");
});

router.put("/api/burgers", async (req, res) => {
    const [{ name }, { adjective }, { bun }, { cheese }, { condiments }, { toppings }, { devoured }, { id }] = Array(9).fill(req.body);
    const updatedBurg = await burger.update(["name", "adjective", "bun", "cheese", "condiments", "toppings", "devoured"], [name, adjective, bun, cheese, condiments, toppings, devoured], ["id", id]);
    res.redirect("/");
});

router.delete("api/burgers/:id", async (req, res) => {
    const id = req.params.id;
    let deletedBurg = await burger.delete(id);
    res.redirect("/");
});

module.exports = router;