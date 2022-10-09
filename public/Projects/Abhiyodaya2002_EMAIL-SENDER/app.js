const express=require("express");
var nodemailer = require('nodemailer');
const bodyparser=require("body-parser");
const fs=require("fs");
const multer  = require('multer') //It is a dependency which is used to upload files on the server
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index");
});

var to;
var subject;
var body;
var pat;

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
 
var upload = multer({
    storage: Storage
}).single("image"); //Field name and max count
  

app.post("/sendMail",(req,res)=>{
   // res.send("<h1>mail received</h1>");
   upload(req, res, function (err) {
    if(err)
    console.log(err);
    else{
        to=req.body.to;
        subject=req.body.subject;
        text=req.body.text;
        if(req.file!=null)
        pat=req.file.path;
     console.log(text+" "+pat);
        const transporter = nodemailer.createTransport({
            port: 465,               // true for 465, false for other ports
            host: "smtp.gmail.com",
               auth: {
                    user: 'abhiyodayapandey@gmail.com',
                    pass: 'jowkqnznojuvpbhh',
                 },
            secure: true,
            });

            const mailDataWithattachments = {
                from: 'abhiyodayapandey@gmail.com',  // sender address
                  to: to,   // list of receivers
                  subject: subject,
                  text: text,
                  attachments :[{
                    path:pat
                  }]
                };
            
                  
                transporter.sendMail(mailDataWithattachments, function (err, info) {
                    if(err)
                      console.log(err);
                    else
                      console.log("Email Sent successfully "+info);
                      //deleting image attachment from the server because after sending the mail we have no use of it.
                      fs.unlink(pat, function (err) {
                        if (err) console.log( err);
                        console.log('File deleted!');
                        res.render("result");
                      });
                 });
          
    
    }
   })
})
app.listen(process.env.PORT||3000,()=>{
    console.log("app running at port 3000");
});