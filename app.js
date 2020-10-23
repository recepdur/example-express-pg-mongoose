const express = require('express')
const app = express()
const mongoose = require("mongoose");
const port = 3000
const DB_CONNECTION =''; // change
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
});
client.connect()

app.get('/', (req, res) => {  
  res.send('home')
})

app.get('/pgselect', (req, res) => {   
  const query = `SELECT * FROM sigorta LIMIT 3`
  client.query(query, (errPG, resPG) => {
      if (errPG) {
          console.error(errPG);
          return;
      } 
      for (let row of resPG.rows) {       
      }
      console.log(resPG.rows)
      res.send(resPG.rows)
  });  
})

app.get('/mginsert', (req, res) => { 
  
  const query = `SELECT * FROM sigorta LIMIT 3`

  client.query(query, (errPG, resPG) => {
      if (errPG) {
          console.error(errPG);
          return;
      } 
      for (let row of resPG.rows) {
        addMongo(row)
      }
      res.send(resPG.rows)
  });  
})


function addMongo(row){
  console.log(row);
}

connect();

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
  return mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
}

function listen() {
  app.listen(port);
  console.log('App started ' + `Port:${port} ` );
}