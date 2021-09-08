import React from 'react'

function Footer() {
    return (
        <div className="footer container text-center mb-4">
            <hr></hr>
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <h4 className="mb-3">Services</h4>
                    <p>Meat</p>
                    <p>Fish</p>
                    <p>Burger</p>
                    <p>Pizza</p>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <h4 className="mb-3">Branches</h4>
                    <p>Cairo</p>
                    <p>Banha</p>
                    <p>Alexandria</p>
                    <p>Aswan</p>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <h4 className="mb-3">Social Media</h4>
                    <p>Facebook</p>
                    <p>WhatsApp</p>
                    <p>Instgram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <h6 className="mt-4">copyright © 2021 all rights reserved</h6>
        </div>
    )
}

export default Footer
