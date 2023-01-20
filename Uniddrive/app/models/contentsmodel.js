const { response } = require("express");
var pool = require('./connection');
var { mssql, poolPromise } = require('./connection');
//var con_id = sessionStorage.getItem("con_id");


module.exports.getContentsByCategory = async function (user_cat_id) {

    //var user_cat = sessionStorage.getItem("usercat");

    try {
        const sql = " select * from content " +
		"inner join studentproject on con_stu_pro_id = stu_pro_id " +
		"inner join project on stu_pro_pro_id = pro_id " +
		"inner join student on stu_pro_stu_id = stu_id " +
        "inner join unitcourse on pro_unitcour_id = unit_cour_id " +
        "inner join course on unit_cour_cour_id = cour_id " +
        "inner join unit on unit_cour_unit_id = unit_id " +
        "inner join category on con_cat_id = cat_id " +
        "inner join year on con_year_id = year_id " +
        "inner join college on con_col_id = col_id " +
        "inner join university on col_uni_id = uni_id " +
        "where con_cat_id = " + user_cat_id + " ;";

        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.getContents = async function () {

    //var user_cat = sessionStorage.getItem("usercat");

    try {
        const sql = " select * from content " +
		"inner join studentproject on con_stu_pro_id = stu_pro_id " +
		"inner join project on stu_pro_pro_id = pro_id " +
		"inner join student on stu_pro_stu_id = stu_id " +
        "inner join unitcourse on pro_unitcour_id = unit_cour_id " +
        "inner join course on unit_cour_cour_id = cour_id " +
        "inner join unit on unit_cour_unit_id = unit_id " +
        "inner join category on con_cat_id = cat_id " +
        "inner join year on con_year_id = year_id " +
        "inner join college on con_col_id = col_id " +
        "inner join university on col_uni_id = uni_id ;";
        

        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getStudentProjectsbyWord = async function (user_cat_id, word) {
    
    try {
        const sql = " select * from content "+     
        "inner join studentproject on con_stu_pro_id = stu_pro_id "+      
        "inner join project on stu_pro_pro_id = pro_id "+     
        "inner join student on stu_pro_stu_id = stu_id "+      
        "inner join unitcourse on pro_unitcour_id = unit_cour_id "+     
        "inner join course on unit_cour_cour_id = cour_id "+       
        "inner join unit on unit_cour_unit_id = unit_id "+      
        "inner join category on con_cat_id = cat_id "+
        "inner join year on con_year_id = year_id " +
        "inner join college on con_col_id = col_id " + 
        "inner join university on col_uni_id = uni_id " +
        "where con_cat_id = " + user_cat_id + " "+
        "and UPPER(con_name) like UPPER('%"+word+"%')  ;";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}