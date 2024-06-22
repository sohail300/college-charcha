import { Contact, GetACall, Newsletter, Register } from "../db/schema.js";
import { transporter } from "../utils/transporter.js";

export async function register(req, res) {
  try {
    console.log(req.body);

    const registerData = new Register(req.body);
    await registerData.save();

    const info = await transporter.sendMail({
      from: `Landing Page Email <77266c001@smtp-brevo.com>`,
      to: 'md.sohail.ansar999@gmail.com',
      subject: "Simple Enquiry",
      html: `<body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
    <table role="presentation"
      style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
      <tbody>
        <tr>
          <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
            <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
              <tbody>
                <tr>
                  <td style="padding: 40px 0px 0px;">

                    <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                      <div style="color: rgb(0, 0, 0); text-align: left;">
                        <h1 style="margin: 1rem 0">Simple Enquiry</h1>
                        <p style="padding-bottom: 16px">Name: ${registerData.name}</p>
                        <p style="padding-bottom: 16px">Phone: ${registerData.phone}</p>
                      </div>
                    </div>
                    <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
                      <p style="padding-bottom: 16px">Career Charcha</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>`
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