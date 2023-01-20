const { response } = require("express");
var pool = require('../models/connection');
var { mssql, poolPromise } = require('../models/connection');
var brcypt = require('bcrypt');

module.exports.getUsers = async function () {
    try {
        const sql = " select * from users " +
        "inner join roles on user_role_id = role_id " +
        "inner join category on user_cat_id = cat_id ;"
        
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.authUser = async function(user){

    try {
        let sql = "SELECT * FROM users where user_num = $1";

        let result = await pool.query(sql,[user.user_num]);

        console.log("authUser.result.rows = " + JSON.stringify(result.rows));

        let passwordb = result.rows[0].user_password;

        let valor = brcypt.compareSync(user.user_password, passwordb); 

        console.log("authUser.valor = " + JSON.stringify(valor));


        if(result.rows.length > 0 && valor)
          
          return { status: 200, result: result.rows[0]};
            //return { status: 200, result: result.rows[0]};
        else return { status: 401, result: {msg:' wrong email or passsword'}};
        
    } catch (err) {
        console.log(err);
        return { status: 500, result: {msg: 'wrong email or passsword'}};
    }
}


module.exports.saveUser = async function(user) {
    try {

        let sql =
            "INSERT " +
            "INTO users " +
            "(user_num, user_password, user_name, user_role_id, user_cat_id) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING user_id";

        
        let password = brcypt.hashSync(user.user_password, 10) 

        let result = await pool.query(sql, [user.user_num, password, user.user_name, user.user_role_id, user.user_cat_id]);
            
        //let result = await pool.query(sql, [user.user_num, user.user_password, user.user_name, user.user_role_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

/*
module.exports.saveUser = async function(user) {
    try {

        let sql =
            "INSERT " +
            "INTO users " +
            "(user_num, user_password, user_name, user_role_id) " +
            "VALUES ($1, $2, $3, $4) " +
            "RETURNING user_id";

        let result = await pool.query(sql, [user.user_num, user.user_password, user.user_name, user.user_role_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}*/

module.exports.deleteUser = async function(user) {
    try {

        let sql =

            "DELETE FROM users " + 
            "WHERE user_name = $1 AND user_num = $2 ; ";

        let result = await pool.query(sql, [user.user_name, user.user_num]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}