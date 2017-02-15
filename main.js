var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require("es6-promise").Promise;
mongoose.connect('mongodb://localhost/blogDb');
var blogSchema = mongoose.Schema({
	id: Number,
	cat: String,
	title: String,
	pTime: Date,
	cntnt: String
});

var blogs = mongoose.model('blogs', blogSchema);
var app = express();

var router = express.Router();

//Just put here for future expanding to include comment feature.
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/www')));
app.use(express.static('public'));

router.get('/', function(req, res) {
	res.sendFile(index.html);
});

router.route('/blogs').
get(function(req, res) {
	blogs.find().then(function(blogsRt) {
		res.send(blogsRt);
	});
});

app.use('/blog', router);
app.use(router);
app.listen(80, '172.31.14.88', function(req, res) {
	console.log("listening on port 80");
});
