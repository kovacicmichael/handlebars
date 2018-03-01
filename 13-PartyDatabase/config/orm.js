var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {

	selectPartyName: function(colToSearch, tableInput){
		var queryString = "SELECT ? FROM ?"
		connection.query(queryString, [colToSearch, tableInput], function(err, results){
			if(err) throw err;
			console.log(results);
		})
	},
	selectClientNames: function(colToSearch, tableInput){
		var queryString = "SELECT ? FROM ?"
		connection.query(queryString, [colToSearch, tableInput], function(err, results){
			if(err) throw err;
			console.log(results);
		})
	},
	selectWhere: function(tableInput, colToSearch, valOfCol){
		var queryString = "SELECT * FROM ? WHERE ? = ?"
		connection.query(tableInput, colToSearch, valOfCol], function(err, results){
			if(err) throw err;
			console.log(results);
		})
	},
	leftJoin: function()





}