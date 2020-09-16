import React from 'react'
import Banner from "../banner"

const Contact = () => {
    return (
        <div>
            <Banner title={"Contact"} path={"Contact"} />
            <div className="contact-content-wrapper">
            
                <div className="options-wrapper" >
                    <div className="option" >
                        <i class="far fa-map"></i>
                        <div className="description" >Address</div>
                        <div className="info">
                            <div>1234 Rocky Parkway</div>
                            <div>San Diego, CA</div>
                            <div>92130</div>
                        </div>
                    </div>
                    <div className="option" >
                    <i class="far fa-envelope"></i>
                        <div className="description" >Email</div>
                        <div className="info">email@email.com</div>
                    </div>
                    <div className="option" >
                        <i class="fas fa-phone"></i>
                        <div className="description" >Phone</div>
                        <div className="info">(858) 123-4567</div>
                    </div>
                </div>

                
                <div className="form-map-wrapper">
                    <div className="left">
                        <div className="form-wrapper" >
                            <div className="header">Get in Touch</div>
                            <div className="slogan" >A very cool slogan can go here, Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                            <form action="https://formspree.io/mleorbko" method="POST">
                                <div className="inputs-wrapper" >
                                    <div className="row">
                                        <input type="text" placeholder="Full Name *" name="name" />
                                        <input type="text" placeholder="Email *" name="_replyto" />
                                    </div>
                                    <div className="row">
                                        <input type="text" placeholder="Phone" />
                                        <input type="text" placeholder="Subject " />
                                    </div>
                                    <textarea className="row" name="message" placeholder="Message *" />
                                    <button type="submit" value="send">Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="map-wrapper" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0763457636967!2d-111.9287582847603!3d33.499390754108134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0bbdbed13a73%3A0xfab78c0f014377d8!2sDiego+Pops!5e0!3m2!1sen!2sus!4v1549675265272" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Contact