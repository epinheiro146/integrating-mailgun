import * as express from "express";
import Mailgun from "mailgun.js";
import * as FormData from "form-data";
import { mailgun as mailgunConf } from "../config"

const router = express.Router();

const configuredMailgun = new Mailgun(FormData).client({
    username: 'api',
    key: `${mailgunConf.key}`
});

router.post('/', async (req, res) => {
    const { subject, from, message } = req.body;
    try {
        const results = await configuredMailgun.messages.create(`${mailgunConf.domain}`, {
            to: `${mailgunConf.email}`,
            subject: `${subject}`,
            from: `${from}`,
            html: `<h1>${message}</h1>`
        })
        res.json({ message: "Thank you for reaching out. Your message has been sent.", results });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong.", error });
    }
});

export default router;