import express from "express";

const app = express();

app.get('/biodata',(req, res) => {

    res.send(
        'Nama : Dani Firmansah <br>'
    )
});

app.listen(3000, () => console.log('Server Running at http://localhost:3000'))