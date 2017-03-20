/**
 * Created by asus on 2017/3/17.
 */
var lastIndex = __dirname.lastIndexOf("\\");
var abPath = __dirname.slice(0, lastIndex);
exports.node4 = function(req, res){
    res.sendFile(abPath + "/dist/html/node4.html");
};
