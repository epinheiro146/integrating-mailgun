import * as dotenv from 'dotenv';

dotenv.config();

export const dbCredentials = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
};

export const stripe = {
    key: process.env.STRIPE_SECRET_KEY
};

export const mailgun = {
    key: process.env.MAILGUN_SECRET_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    email: process.env.MAILGUN_RECIPIENT_EMAIL
};