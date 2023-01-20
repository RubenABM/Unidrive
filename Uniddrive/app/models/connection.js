 /* var mssql = require('mssql');

const sqlConfiguration = {
    server: 'localhost\\SQLEXPRESS',
    //port: 1433,
    database: 'uniddrivetest',
    user: 'root',
    password: '',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    "options": {
        "encrypt": false // Local server
            /*
            // For Azure
            encrypt: true,                  
            trustServerCertificate: false   // Change to true for local dev / self-signed certs
            
    }
};*/
/*
console.log("sqlConfiguration = " + JSON.stringify(sqlConfiguration));

const poolPromise = new mssql.ConnectionPool(sqlConfiguration)
   .connect()
   .then(pool => {
       console.log('Connected to MSSQL.');
       return pool;
   })
   .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
   mssql,
   poolPromise
}
*/

// const mysql = require('mysql');

// const connection = mysql.createConnection({
// 	host : 'localhost',
// 	database : 'uniddrivetest',
// 	user : 'root',
// 	password : ''
// });

// connection.connect(function(error){
// 	if(error)
// 	{
// 		throw error;
// 	}
// 	else
// 	{
// 		console.log('MySQL Database is connected Successfully');
// 	}
// });

// module.exports = connection;



var pg = require('pg');

//const connectionString = "postgres://root:1234@172.18.0.3:5432/postgres";
//const connectionString = "postgres://postgres:password@localhost:5432/Products";
//const connectionString = "postgres://" + process.env.DBUSER + ":" + process.env.DBPASS + "@localhost:5432/Products";
//(Ruben.M) const connectionString = "postgres://postgres:20200453@localhost:5432/uniddrive";
//(Marta) const connectionString = "postgres://postgres:scorpioN@localhost:5432/uniddrive";
// (ruben) const connectionString = "postgres://postgres:foobar@localhost:5432/uniddrive_development";
// (ana) const connectionString = "postgres://postgres:p@$$w0rd@localhost:5432/uniddrive_development";

// (docker) const connectionString = "postgresql://postgres:foobar@haproxy:5000/uniddrive_development";

console.log("connectionString = " + connectionString);

const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10
    // For Heroku
    /*       ,
    ssl: {
        require: true,
        rejectUnauthorized: false
    */
}).on('connect', (stream) => {
    console.log('Connected to PG.');
});

module.exports = pool;