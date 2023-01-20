const { response } = require("express");
var pool = require('./connection');
var { mssql, poolPromise } = require('./connection');

module.exports.getCountDocentes = async function () {
    try {
        const sql = " select *  from users " +
        "inner join roles on user_role_id = role_id " +
        "where user_role_id = 1 ;";

        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getCountProjetos = async function () {
    try {
        const sql = " select * from project ;";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getCountUtilizadoresGerais = async function () {
    try {
        const sql = " select * from users " +
        "inner join roles on user_role_id = role_id " +
        "where user_role_id = 3";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}