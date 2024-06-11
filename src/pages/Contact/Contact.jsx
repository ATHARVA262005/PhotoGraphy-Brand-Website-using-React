import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SocialBtn from '../../components/SocialBtn/SocialBtn';
import "./contact.css"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-content">
                <h1>GET IN TOUCH</h1>
                <div className="contact-box">
                    <div className="contact-info">
                        <p>For inquiries about sessions and pricing, fill out the form and someone will get back to you.</p>
                        <span>500 Terry Francine Street San Francisco, CA 94158</span>
                        <span>info@mysite.com</span>
                        <span>Tel: 123-456-7890</span>
                        <div className="contact-social">
                            <SocialBtn />
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">Telephone</label>
                                    <input type="tel" id="telephone" name="telephone" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message"></textarea>
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
