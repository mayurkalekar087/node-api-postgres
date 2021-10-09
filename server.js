const express = require('express');
const appRoutes = require('./app/routes/routes');

const app = express()
const port = 3000

app.use(express.json());

app.get("/", (req,res) => {
    res.send({ info: 'Node.js, Express, and Postgres API' })
});

app.use("/students",appRoutes); 

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
