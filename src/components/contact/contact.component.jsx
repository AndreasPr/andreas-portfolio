import React from "react";
import './contact.styles.css';

const Contact = () => {
    return (
        <div className="rn-contact-area rn-section-gap section-separator contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">CONTACT</span>
                            <h2 className="title">Contact With Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                    <div className="col-lg-5">
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src="../../assets/contact-image.jpg" alt="contact-image"/>
                            </div>
                            <div className="title-area">
                                <h4 className="title">Andreas Priftis</h4>
                                <span>Software Engineer</span>
                            </div>
                            <div className="description">
                                <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                                <span className="phone">Phone: +1 534-288-9503</span><br/>
                                <span className="email">Email: andreascompany@gmail.com</span>
                            </div>
                            <div className="social-media-area">
                                <div className="name">Find me!</div>
                                <div className="social-group-icons">
                                    <a href="#"></a>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">
                               <form id="contact-form">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-name">Your name</label>
                                            <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-phone">Phone Number</label>
                                            <input className="form-control" name="contact-phone" id="contact-phone" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-email">Email</label>
                                            <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input className="form-control form-control-sm" id="subject" name="subject" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-message">Your Message</label>
                                            <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button name="submit" type="submit" id="submit" className="rn-btn">
                                            <span>SEND</span>
                                            
                                        </button>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default Contact;