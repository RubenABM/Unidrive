const { response } = require("express");
var pool = require('../models/connection');
var { mssql, poolPromise } = require('../models/connection');

module.exports.getInstitution = async function () {
    try {
        const sql = " select * from college " +
        " inner join university on col_uni_id = uni_id ORDER BY uni_name ;";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}