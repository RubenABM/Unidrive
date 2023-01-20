const { response } = require("express");
var pool = require('../models/connection');
var { mssql, poolPromise } = require('../models/connection');

module.exports.getUnitCourses = async function () {
    try {
        const sql = " select * from unitcourse " +
        "inner join course on unit_cour_cour_id = cour_id " +
        "inner join unit on unit_cour_unit_id = unit_id " +
        "order by cour_name";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}