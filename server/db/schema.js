import mongoose from "mongoose";

export const Register = mongoose.model('Register', {
    name: String,
    email: String,
    phone: String,
    hero: String
});

export const GetACall = mongoose.model('GetACall', {
    name: String,
    phone: String,
});

export const Newsletter = mongoose.model('Newsletter', {
    email: String,
});

export const Contact = model('Contact', {
    name: String,
    email: String,
    phone: String,
    course: String
});
