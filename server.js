const express = require('express');
const app = express();
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 7000;

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})

app.get('/thankyou', (req,res) => {
    res.sendFile(__dirname + '/public/views/thankyou.html')
})

app.get('/archive', (req,res) => {
    res.sendFile(__dirname + '/public/views/moreproject.html')
})

app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/public/views/404.html');
  });

app.post('/',(req,res)=>{
    console.log(req.body);


    const output = 
        `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
          <li>Name: ${req.body.namej}</li>
          <li>surname: ${req.body.surname}</li>
          <li>Email: ${req.body.email}</li>
          <li>subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;
    

   const trasporter =nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:'jihadjojojo2017@gmail.com',
            pass:'1234jehad56'
        }
    })

    const mailOption = {
        from:req.body.email,
        to:'jehad.hlewi22@gmail.com',
        subject:`Message from ${req.body.email}: ${req.body.subject}`,
        text:req.body.message,
        html:output
        
    }

    trasporter.sendMail(mailOption , (error,info)=>{
        if(error){
            console.log(error)
            res.send('error');
        }else{
            console.log('Email sent' + info.response)
            res.send('success');
            
        }
    })
})

app.listen(PORT,()=> {
    console.log(`Server start on port ${PORT}`)
})