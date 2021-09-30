let express = require('express');
let app = express();

//http://localhost:8000/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>");
});

//http://localhost:8000/user?fname=Nate&lname=Power
app.get("/user", (req, res) => {
    let fname = req.query.fname;
    let lname = req.query.lname;

    response = {
        fname,
        lname
    };
    res.send(response);
});

//http://localhost:8000/user/Nate/Power
app.post("/user/:fname/:lname", (req, res) => {
    let fname = req.params.fname;
    let lname = req.params.lname;

    response = {
        fname,
        lname
    };
    res.send(response);
});

let server = app.listen(8000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Server running at http://${host}:${port}`);
});