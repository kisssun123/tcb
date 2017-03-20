var express = require("express");
var path = require("path");
var app = express();  //初始化

app.set('port',8888);
app.use(express.static(path.join(__dirname,'dist')));


var index = require("./routes/index");
var page = require("./routes/page");
var shop = require("./routes/shop");


app.use("/index.html",index.index);
app.use("/data/:pageNum",page.page);
app.use("/shop.html",shop.shop);



// 定制404页面
app.use(function(req, res){ 
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//定制500页面
app.use(function(err, req, res, next){ 
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get("port"), function(){
     console.log( 'Express started on http://127.0.0.1:' +
        app.get("port") + '; press Ctrl-C to terminate.' );
});