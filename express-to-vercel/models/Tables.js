const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const TableSchema = new Schema({
   tableName:String,
   addresses: [String]
 
});

const TableModel = model('Table', TableSchema);

module.exports = TableModel;