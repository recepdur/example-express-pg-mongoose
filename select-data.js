const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
});

client.connect()

const query = `
SELECT *
FROM sigorta
LIMIT 10
`

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    for (let row of res.rows) {
        console.log(row);
    }
});