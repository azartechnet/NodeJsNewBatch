var express=require('express')
var router=express.Router();

router.get('/',function(req,res){

    res.send('This is GET function')

});
router.post('/',function(req,res){

    res.send('This is POST function')

});

//export the index.js

module.exports=router;