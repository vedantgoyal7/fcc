module.exports=function (app) {
    app.get('/',function (req,res) {
        res.send(process.cwd()+'/public/index.html');
    });
};