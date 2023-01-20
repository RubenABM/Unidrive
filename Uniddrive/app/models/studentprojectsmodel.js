const { response } = require("express");
var pool = require('./connection');
var { mssql, poolPromise } = require('./connection');

module.exports.getStudentProjects = async function () {
    
    try {
        const sql = " select * from studentproject " +
		"inner join project on stu_pro_pro_id = pro_id " +
		"inner join student on stu_pro_stu_id = stu_id " +
        "inner join unitcourse on pro_unitcour_id = unit_cour_id " +
        "inner join course on unit_cour_cour_id = cour_id " +
        "inner join unit on unit_cour_unit_id = unit_id " +
        "order by pro_name";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}