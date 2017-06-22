/**
 * TraficController
 *
 * @description :: Server-side logic for managing trafics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create : function(req,res,next){
	    Trafic.create({mainStreet : req.param('m'), secondStreet : req.param('s')},function(err,created){
	        if(err){
						console.log(err);

						return res.badRequest();
					}
					console.log(created);

	        return res.ok();
	    });
	},
	getAll : function(req,res,next){
	   Trafic.find({},function(err,found){
	       return res.json(found);
	   });
	},
	search : function(req,res,next){
    Trafic.find({ $or : [{mainStreet : req.param('s')},{secondStreet : req.param('s')}]},function(err,found){
			console.log(req.param('s'),found);
      return res.json(found);
    });
  }
};
