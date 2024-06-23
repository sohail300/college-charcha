import { Contact, GetACall, Newsletter, Register } from "../db/schema.js";
import { transporter } from "../utils/transporter.js";

export async function register(req, res) {
  try {
    console.log(req.body);

    const registerData = new Register(req.body);
    await registerData.save();

    const info = await transporter.sendMail({
      from: `Mail Trap <demomailtrap.com>`,
      to: 'sohailatwork10@gmail.com',
      subject: "College Enquiry",
      text: 'Hii'
    });

    console.log("Message sent:", info.messageId);
    return res.status(200).json({ msg: 'Email Sent' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function getacall(req, res) {
  try {
    console.log(req.body);

    const getACallData = new GetACall(req.body);
    await getACallData.save();

    const info = await transporter.sendMail({
      from: `Landing Page Email <charchacollege@gmail.com>`,
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

export async function newsletter(req, res) {
  try {
    console.log(req.body);

    const newsletterData = new Newsletter(req.body);
    await newsletterData.save();

    const info = await transporter.sendMail({
      from: `Landing Page Email <charchacollege@gmail.com>`,
      to: 'sohailatwork10@gmail.com',
      subject: "Newsletter",
      text: 'Hii'
    });

    console.log("Message sent:", info.messageId);
    return res.status(200).json({ msg: 'Email Sent' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function contactus(req, res) {
  try {
    console.log(req.body);

    const contactData = new Contact(req.body);
    await contactData.save();

    const info = await transporter.sendMail({
      from: `Landing Page Email <charchacollege@gmail.com>`,
      to: 'sohailatwork10@gmail.com',
      subject: "Contact Us",
      text: 'Hii'
    });

    console.log("Message sent:", info.messageId);
    return res.status(200).json({ msg: 'Email Sent' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
}