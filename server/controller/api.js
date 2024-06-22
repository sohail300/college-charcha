import { Contact, GetACall, Newsletter, Register } from "../db/schema.js";
import { transporter } from "../utils/transporter.js";

export async function thankyou(req, res) {
    res.sendFile(join(__dirname, 'public', 'thankyou.html'));
}

export async function register(req, res) {
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
}

export async function getacall(req, res) {
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
}

export async function newsletter(req, res) {
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
}

export async function contactus(req, res) {
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
}