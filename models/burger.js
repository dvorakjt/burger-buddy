const orm = require("../config/orm");

const burger = {
    create: (name, adjective, bun, cheese, condiments, toppings, devoured) => {
        return new Promise(async (resolve, reject) => {
            let res = await orm.createRecord("burgers", ["name", "adjective", "bun", "cheese", "condiments", "toppings", "devoured"], [name, adjective, bun, cheese, condiments, toppings, devoured]);
            resolve(res);
        });
    },

    read: (condition_var, condition_val) => {
        return new Promise(async (resolve, reject) => {
            let res;
            //if a condition was supplied find the burger that satisfies that condition, if not just find all burgers
            if (condition_var && condition_val) {
                res = await orm.readRecord("burgers", [condition_var, condition_val]);
            }
            else res = await orm.readRecord("burgers");
            resolve(res);
        });
    },

    update: (columns, values, condition_var, condition_val) => {
        return new Promise(async (resolve, reject) => {
            console.log(columns, values, condition_var, condition_val);
            let res = await orm.updateRecord("burgers", columns, values, [condition_var, condition_val]);
            resolve(res);
        });
    },

    delete: (id) => {
        return new Promise(async (resolve, reject) => {
            let res = await orm.deleteRecord("burgers", ["id", id]);
            resolve(res);
        });
    }
}

module.exports = burger;