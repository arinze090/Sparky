import React from 'react';
import './Testi.css';

function Testimonial() {
    return (
        <div className="testimonial">
            <div className="testimonial__header">
                <h1>Clients</h1>
                <p>Our Client list speaks for itself, we have worked for the biggest organisations and companies acrooss board, Some of our Clients include</p>
            </div>
            <div className="round2">
                <img src={require('../images/Clients.png')} alt="" className='client_img' />
                {/* <div className="round__image">
                    <img src={require('../images/Testimonial.png')} alt="" />
                </div>
                <div className="round">
                    <h1 className='dream'>Dream house isn’t a dream anymore</h1>
                    <p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.</p>
                    <h1 className='name'>Gbenga Adeyinka</h1>
                    <p className='title'>Real Estate Agent</p>
                </div> */}
            </div>
        </div>
    )
}

export default Testimonial
