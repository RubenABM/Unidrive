const { response } = require("express");
var pool = require('../models/connection');
var { mssql, poolPromise } = require('../models/connection');


module.exports.getUsers = async function () {
    try {
        const sql = " select * from users ;";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
/*
module.exports.getUsers = async function() {
    try {
        let sql = "select * from users";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}*/