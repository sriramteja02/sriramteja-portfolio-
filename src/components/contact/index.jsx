import { useState } from "react";
import "./index.css";
import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaCode,
    FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        const form = event.target;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();

        const newErrors = {};
        if (!name) newErrors.name = "Name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!message) newErrors.message = "Message is required.";

        if (Object.keys(newErrors).length > 0) {
            event.preventDefault();
            setErrors(newErrors);
            return;
        }

        setErrors({});
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-heading">
                <span>Get In</span>
                <strong>Touch</strong>
            </div>
            <div className="contact-container">
                <div className="contact-form-box">
                    <h2>
                        Contact <span>Me</span>
                    </h2>
                    <p>
                        Have a project, opportunity, or just want to connect?
                        Feel free to send me a message.
                    </p>
                    <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} noValidate>
                        <input
                            type="hidden"
                            name="access_key"
                            value="83c263be-8968-4eb2-89fa-2b8d585a5da9"
                        />
                        <div className="form-group">
                            <label htmlFor="name">
                                Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">
                                Message <span className="required">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message..."
                                rows="6"
                            ></textarea>
                            {errors.message && <p className="error-text">{errors.message}</p>}
                        </div>
                        <button type="submit" className="contact-submit">
                            Send Message →
                        </button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2>
                        Let's <span>Connect</span>
                    </h2>
                    <p>
                        You can find me on these platforms. I'm always open to
                        discussing new projects, opportunities, and ideas.
                    </p>
                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/in/thallapalli-sri-ramteja-54aa76351"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card"
                        >
                            <div className="social-icon linkedin">
                                <FaLinkedinIn />
                            </div>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>Connect with me professionally</p>
                            </div>
                        </a>
                        <a
                            href="mailto:thallapallisriramteja@gmail.com"
                            className="social-card"
                        >
                            <div className="social-icon email">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>thallapallisriramteja@gmail.com</p>
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/_sriram_teja"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card"
                        >
                            <div className="social-icon instagram">
                                <FaInstagram />
                            </div>
                            <div>
                                <h3>Instagram</h3>
                                <p>@_sriram_teja</p>
                            </div>
                        </a>
                        <a
                            href="https://github.com/sriramteja02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card"
                        >
                            <div className="social-icon github">
                                <FaGithub />
                            </div>
                            <div>
                                <h3>GitHub</h3>
                                <p>View my projects</p>
                            </div>
                        </a>
                        <a
                            href="https://www.codechef.com/users/sriram0209"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card"
                        >
                            <div className="social-icon codechef">
                                <FaCode />
                            </div>
                            <div>
                                <h3>CodeChef</h3>
                                <p>@sriram0209</p>
                            </div>
                        </a>
                        <a
                            href="https://leetcode.com/u/sriram0209/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card"
                        >
                            <div className="social-icon leetcode">
                                <SiLeetcode />
                            </div>
                            <div>
                                <h3>LeetCode</h3>
                                <p>@sriram0209</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
