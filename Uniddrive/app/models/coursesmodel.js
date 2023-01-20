const { response } = require("express");
var pool = require('../models/connection');
var { mssql, poolPromise } = require('../models/connection');

module.exports.getCourses = async function () {
    try {
        const sql = " select * from course ;";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}