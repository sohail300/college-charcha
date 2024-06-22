import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    name: process.env.MAIL_HOST,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
    },
    logger: true,
    debug: true
});