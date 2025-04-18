require('dotenv').config();
const mongoose = require("mongoose");


const connection = mongoose.connect("mongodb+srv://shyam07home:rekJXI4mfWJj5qdb@users.kj91fvp.mongodb.net/?retryWrites=true&w=majority&appName=Users");


module.exports = { connection };