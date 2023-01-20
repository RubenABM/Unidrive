const { response } = require("express");
var pool = require('../models/connection');
var { mssql, poolPromise } = require('../models/connection');


module.exports.saveProject = async function(pro) {
    try {

        let sql =
            "INSERT " +
            "INTO project " +
            "(pro_date, pro_name, pro_abstract, pro_biblioweb, pro_unitcour_id) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING pro_id";

        let result = await pool.query(sql, [pro.pro_date, pro.pro_name, pro.pro_abstract, pro.pro_biblioweb, pro.pro_unitcour_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

module.exports.getProject = async function(id)
{
    try {
        const sql = "select * from project where pro_id = " + id;
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.saveAssociation = async function(stu_pro) {
    try {

        let sql =
            "INSERT " +
            "INTO studentproject " +
            "(stu_pro_stu_id, stu_pro_pro_id) " +
            "VALUES ($1, $2) " +
            "RETURNING stu_pro_id";

        let result = await pool.query(sql, [stu_pro.stu_pro_stu_id, stu_pro.stu_pro_pro_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

module.exports.saveContent = async function(con) {
    try {

        let sql =
            "INSERT " +
            "INTO content " +
            "(con_user_id, con_cat_id, con_stu_pro_id, con_name, con_url, con_year_id, con_col_id, con_type) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8) " +
            "RETURNING con_id";

        let result = await pool.query(sql, [con.con_user_id, con.con_cat_id, con.con_stu_pro_id, con.con_name, con.con_url, con.con_year_id, con.con_col_id, con.con_type]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

