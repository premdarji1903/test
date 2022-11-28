
const express=require('express');
const app=express();
const port=process.env.PORT||2000;
const path=require('path');
const temp=path.join(__dirname,'/temp/views');
const hbs=require('hbs');
const partial=path.join(__dirname,'/temp/partial');
const request=require('request');

app.set("view engine","hbs");
app.set("views",temp)//we can use a different folder instead of view folder
hbs.registerPartials(partial);//path of partial
app.get("/",(req,res)=>{
    res.render("index",{
        name:"prem",
    });
});
app.get("/color",(req,res)=>{
    res.render("color");//we can use multiple files in temp folder
})
app.get('/api', function(req, res){
    console.log('id: ' + req.query.id)
    res.send('id: ' + req.query.id);
 });//upper code is known as a request query which user enter in url....!

app.get('/*',(req,res)=>{
    res.render("404",{
        error:"oops....! page is not found"
    })
})
app.listen(port,()=>{
    console.log("server is start")
});

//{{}}---> this is use for javascript object in html
//and the name of above property is defined in this index.js file or app.get
