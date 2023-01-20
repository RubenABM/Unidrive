const { response } = require("express");
var pool = require('./connection');
var { mssql, poolPromise } = require('./connection');

module.exports.getYears = async function () {
    
    try {
        const sql = " select * from year ORDER BY year_value ";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}