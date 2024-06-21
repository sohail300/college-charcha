const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbURL=process.env.DB_URL;
async function connectDB() {
  try {
    const uri = dbURL;
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (err) {
    console.log("Error connecting to DB: " + err);
  }
}
connectDB();

const Register = mongoose.model('Register', {
    name: String,
    email: String,
    phone: String,
    hero: String
});

const GetACall = mongoose.model('GetACall', {
    name: String,
    phone: String,
});

const Newsletter = mongoose.model('Newsletter', {
    email: String,
});

const Contact = mongoose.model('Contact', {
    name: String,
    email: String,
    phone: String,
    course: String
});

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
    },
});

app.get('/', (req, res) => {
    res.send('Root Page');
});

app.get('/thankyou', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thankyou.html'));
});

app.post(`/api/register`, async (req, res) => {
    try {
        console.log(req.body);
        const registerData = new Register(req.body);
        await registerData.save();

        const info = await transporter.sendMail({
            from: `Landing Page Email <charchacollege@gmail.com>`,
            to: 'admissionguidance.gn@gmail.com',
            subject: "Register",
            text: `Name: ${registerData.name}\nEmail: ${registerData.email}\nPhone: ${registerData.phone}\nCourse: ${registerData.hero}\n`,
        });

        console.log("Message sent:", info.messageId);
        // res.redirect('/thankyou');
    } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/getacall', async (req, res) => {
    try {
        console.log(req.body);
        const getACallData = new GetACall(req.body);
        await getACallData.save();

        const info = await transporter.sendMail({
            from: `Landing Page Email <charchacollege@gmail.com>`,
            to: 'admissionguidance.gn@gmail.com',
            subject: "Get A Call",
            text: `Name: ${getACallData.name}\nPhone: ${getACallData.phone}\n`,
        });

        console.log("Message sent:", info.messageId);
        // res.redirect('/thankyou');
    } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/newsletter', async (req, res) => {
    try {
        console.log(req.body);
        const newsletterData = new Newsletter(req.body);
        await newsletterData.save();

        const info = await transporter.sendMail({
            from: `Landing Page Email <charchacollege@gmail.com>`,
            to: 'admissionguidance.gn@gmail.com',
            subject: "Newsletter",
            text: `Email: ${newsletterData.email}\n`,
        });

        console.log("Message sent:", info.messageId);
        // res.redirect('/thankyou');
    } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/api/contactus',  async (req, res) => {
    try {
        console.log(req.body);
        const contactData = new Contact(req.body);
        await contactData.save();

        const info = await transporter.sendMail({
            from: `Landing Page Email <charchacollege@gmail.com>`,
            to: 'admissionguidance.gn@gmail.com',
            subject: "Contact Us",
            text: `Name: ${contactData.name}\nEmail: ${contactData.email}\nPhone: ${contactData.phone}\nMessage: ${contactData.course}\n`,
        });

        console.log("Message sent:", info.messageId);
        // res.redirect('/thankyou');
        // window.location('thankyou.html')
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
