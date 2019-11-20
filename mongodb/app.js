const express=require("express");
const chalk=require('chalk');
const path=require('path');
const cors=require('cors');
const bodyparser=require('body-parser');
 var app=new express();


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));


app.use(express.static(path.join(__dirname,"/public")));
var nav=[{link:'/',title:'Add'},
        {link:'/view',title:'View'},
        {link:'/search',title:'Search'},
        {link:'/update',title:'Edit/ Delete'}
    ];


const viewRouter=require('./src/routs/viewRouts')(nav);
const searchRouter=require('./src/routs/searchRouts')(nav);
const updateRouter=require('./src/routs/updateRouts')(nav);



app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/view',viewRouter);
app.use('/search',searchRouter);
app.use('/update',updateRouter);
app.route('/save')
    .post((req,res)=>{
        console.log(req.body);
        //console.log(req);
    })
app.get('/',function(req,res){
    res.render('add',
    {
        nav,
        title:"Add record"
    }
    );
});

app.listen(3001,function(){
    console.log('listening to port'+chalk.green('3001'))

});