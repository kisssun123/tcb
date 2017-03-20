/**
 * Created by asus on 2017/3/17.
 */
var lastIndex = __dirname.lastIndexOf("\\");
var abPath = __dirname.slice(0, lastIndex);
exports.node6 = function(req, res){
    res.sendFile(abPath + "/dist/html/node6.html");
};
