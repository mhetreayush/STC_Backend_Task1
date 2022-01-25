const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const res = require("express/lib/response");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname))); //Use express.static to implement CSS files.
app.use('/html',(req,res)=>{
    res.sendFile(path.join(__dirname,'mhetre_ayush.html'));
});
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});

app.get('/avg', function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post('/avg', function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var num3=Number(req.body.num3);
    var result = (num1+num2+num3)/3;
    res.send('The average of ' + num1 + ', ' + num2 + ', ' + num3 + ', ' + 'is ' + result);
});

app.get('/:name',(req,res)=>{
    res.send(req.params.name);
    console.log(req.params)
});



