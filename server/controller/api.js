import { writeToSheet } from "../utils/writeToSheet.js";
import { getDate } from "../utils/date.js";
import { getTime } from "../utils/time.js";

export async function register(req, res) {
  try {
    console.log(req.body);
    const { name, phone, email, college } = req.body;
    const data = [
      [name, phone, email, college, '', 'College Enquiry', getDate(), getTime()],
    ];
    const writer = await writeToSheet(data);
    console.log(writer)

    return res.status(200).json({ msg: 'Contact Saved' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function getacall(req, res) {
  try {
    console.log(req.body);
    const { name, phone } = req.body;
    const data = [
      [name, phone, '', '', '', 'Simple Enquiry', getDate(), getTime()],
    ];
    const writer = await writeToSheet(data);
    console.log(writer)

    return res.status(200).json({ msg: 'Contact Saved' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function newsletter(req, res) {
  try {
    console.log(req.body);
    const { email } = req.body;
    const data = [
      ['', '', email, '', '', 'Newsletter', getDate(), getTime()],
    ];
    const writer = await writeToSheet(data);
    console.log(writer)

    return res.status(200).json({ msg: 'Contact Saved' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function contactus(req, res) {
  try {
    console.log(req.body);
    const { name, phone, email, message } = req.body;
    const data = [
      [name, phone, email, '', message, 'Contact', getDate(), getTime()],
    ];
    const writer = await writeToSheet(data);
    console.log(writer)

    return res.status(200).json({ msg: 'Contact Saved' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).send('Internal Server Error');
  }
}