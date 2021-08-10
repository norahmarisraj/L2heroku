//import and setting up middleware
var express = require('express'); //call express
var app = express(); //define our app using express
// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var port = process.env.PORT || 8080 //set our port

//Setting route and path

// Routing
var router = express.Router()
router.get('/', (req,res)=>{
res.json({message:'Hula! my API works!!!'})
}) /*get method to handle GET request. ‘/’ is the requested endpoint. It’s the value that comes after your domain name.*/

//router.get('/hello', function(req,res){
router.get('/hello', (req,res)=>{
	res.json({message:'Hello World!'});
}) //http://localhost:8080/api/hello

router.get('/goodbye/:name', (req,res)=>{
	res.json({message:'Goodbye '+req.params.name})
}) //http://localhost:8080/api/goodbye/yat

router.post('/number', (req,res)=>{
	res.json({message:"The number is "+req.body.num});
}) 

router.post('/sum', (req,res)=>{
	var sum = req.body.num1 + req.body.num2;
	res.json({message:"The number is "+sum});
})

app.use('/api',router);
app.listen(port); // create a server that browsers can connect to
console.log("Magic happened at port "+port);
