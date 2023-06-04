const port = 3000;
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.render('bmi', { bmiResult: "" });
});

app.post("/", (req, res) => {
    console.log(req.body);
    var userWeight = Number(req.body.userWeight);
    var userHeight = Number(req.body.userHeight);
    
    var bmi = userWeight / ((userHeight / 100) ** 2);

    var bmiText = "Your BMI result is : " + bmi.toFixed(1);

    res.render('bmi', { bmiResult: bmiText });
});


app.listen(port, () => {
    console.log(
    `The Server is listening on port number: ${port}`
    );

});
