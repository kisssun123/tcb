var fs=require('fs');
exports.page=function(req,res){
    var param=req.params;
    var page=param.pageNum;
    fs.readFile("data/"+page+".json",function(err,data){
    	if(!err){
    		res.send(data);
    	}
    });
}