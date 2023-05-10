import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { fetcher } from '../services/fetch-helper';
import swal from 'sweetalert';

const Contact = () => {

    const [subject, setSubject] = useState("");
    const [from, setFrom] = useState("");
    const [message, setMessage] = useState("");
    const nav = useNavigate();

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!subject) {
            swal("Oh?", "Please provide a subject for your message!", "error");
            return;
        }

        if (!from) {
            swal("Wait, who?", "Please provide a valid email address!", "error");
            return;
        }

        if (!message) {
            swal("Feeling shy?", "Please enter some content!", "error");
            return;
        }

        fetcher("/api/contact", "POST", { subject, from, message })
            .then((data: any) => {
                swal("Thank you!", `${data.message}`, "success");
                nav('/');
            })
            .catch(error => swal("Oops!", `${error.message}`, "error"));

    };

    return (
        <div className="mt-5 row justify-content-center">
            <div className="col-12 col-md-8">
                <div className="card text-bg-dark shadow-lg">
                    <div className="card-title text-center mt-4">
                        <h4>Contact Us!</h4>
                    </div>
                    <div className="card-body">
                        <div>
                            <p>Subject:</p>
                            <textarea className="form-control mb-2" rows={1} value={subject} onChange={e => setSubject(e.target.value)} />
                            <p>Your Email Address:</p>
                            <textarea className="form-control mb-2" rows={1} value={from} onChange={e => setFrom(e.target.value)} />
                            <p>Message:</p>
                            <textarea className="form-control mb-2" rows={5} value={message} onChange={e => setMessage(e.target.value)} />
                            <button onClick={handleSubmit} className="btn btn-outline-success">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;