import express from 'express';

const app = express();

app.post('/die', (req, res) => {
    res.send("server will die now byeee");
    process.exit;
});

const port = 3050;
app.listen(port, () => {
    console.log("listen: http://localhost:" + port)
});