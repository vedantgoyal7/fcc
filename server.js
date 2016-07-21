var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var routes=require("./app/routes/index.js");
var api=require("./app/api/timestamp.js");
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'html');

app.get('/',function (req,res) {
        res.render(process.cwd()+'/public/index.html');
    });
    
api(app);



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log('running port on');
})