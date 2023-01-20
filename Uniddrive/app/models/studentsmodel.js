const { response } = require("express");
var pool = require('../models/connection');
var { mssql, poolPromise } = require('../models/connection');

module.exports.getStudents = async function () {
    try {
        const sql = " select * from student ORDER BY stu_name;";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}