const { Client } = require('pg')

// const connectionString = 'postgres://postgres:123456@localhost:5432/postgres'
// const client = new Client({
//   connectionString: connectionString,
// })

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
});

client.connect()

client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connection successful');
    console.log(err, res);
    client.end()
});