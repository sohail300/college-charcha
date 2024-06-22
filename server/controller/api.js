import { Contact, GetACall, Newsletter, Register } from "../db/schema.js";
import { transporter } from "../utils/transporter.js";

export async function register(req, res) {
  try {
    console.log(req.body);

    const registerData = new Register(req.body);
    await registerData.save();

    const info = await transporter.sendMail({
      from: `Landing Page Email <77266c001@smtp-brevo.com>`,
      to: 'sohailatwork10@gmail.com',
      subject: "Simple Enquiry",
      text: 'Hii'
    });

    console.log("Message sent:", info.messageId);
    return res.status(200).json({ msg: 'Email Sent' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
}

// export async function getacall(req, res) {
//     try {
//         console.log(req.body);
//         const getACallData = new GetACall(req.body);
//         await getACallData.save();

//         const info = await transporter.sendMail({
//             from: `Landing Page Email <charchacollege@gmail.com>`,
//             to: 'admissionguidance.gn@gmail.com',
//             subject: "Get A Call",
//             text: `Name: ${getACallData.name}\nPhone: ${getACallData.phone}\n`,
//         });

//         console.log("Message sent:", info.messageId);
//         // res.redirect('/thankyou');
//     } catch (error) {
//         console.error('Error processing form submission:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// export async function newsletter(req, res) {
//     try {
//         console.log(req.body);
//         const newsletterData = new Newsletter(req.body);
//         await newsletterData.save();

//         const info = await transporter.sendMail({
//             from: `Landing Page Email <charchacollege@gmail.com>`,
//             to: 'admissionguidance.gn@gmail.com',
//             subject: "Newsletter",
//             text: `Email: ${newsletterData.email}\n`,
//         });

//         console.log("Message sent:", info.messageId);
//         // res.redirect('/thankyou');
//     } catch (error) {
//         console.error('Error processing form submission:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// export async function contactus(req, res) {
//     try {
//         console.log(req.body);
//         const contactData = new Contact(req.body);
//         await contactData.save();

//         const info = await transporter.sendMail({
//             from: `Landing Page Email <charchacollege@gmail.com>`,
//             to: 'admissionguidance.gn@gmail.com',
//             subject: "Contact Us",
//             text: `Name: ${contactData.name}\nEmail: ${contactData.email}\nPhone: ${contactData.phone}\nMessage: ${contactData.course}\n`,
//         });

//         console.log("Message sent:", info.messageId);
//         // res.redirect('/thankyou');
//         // window.location('thankyou.html')
//     } catch (error) {
//         res.status(500).send('Internal Server Error');
//     }
// }