var mongoose = require('mongoose');
mongoose.Promise = require("es6-promise").Promise;
mongoose.connect('mongodb://127.0.0.1/blogDb');
var blogSchema = mongoose.Schema({
        id: Number,
        cat: String,
        title: String,
        pTime: Date,
        cntnt: String
});

var blogs = mongoose.model('blogs', blogSchema);
/**
var rcd = {id:2, cat:"General", title:"What's next?",pTime: new Date(), cntnt:"So, here we are. It had been a while since this site is put online. Though not much traffic here, I am thinking if I should really implement the secured log in/out feature here. First, there isn't much risk having people say things here. And without https, it's going to be super easy for anyone to break my security features I will implement here. But again, nothing is at risk. So, quite puzzling...... What do you think? I will get the comment feature here rather quick. So, please leave me some comments here. But please please don't put down nasty stuff... Thanks~~~"};
var upl = new blogs(rcd);
**/

blogs.remove({id: 2}).then(function() {
	process.exit();
});

/**
blogs.find().then(function(res) {
	console.log(res.toString());
	process.exit();
});**/
/**
upl.save(function(err) {
	if(err) {
		console.log(err);
		process.exit();
	}
}).then(function() {
	blogs.find().then(function(res) {
		console.log(res.toString());
	}).then(function() {
	        process.exit();
	})
});
**/        
