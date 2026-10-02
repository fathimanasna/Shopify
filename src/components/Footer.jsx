import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">

            <div className="container py-5">

                <div className="row">

                    {/* BRAND */}
                    <div className="col-lg-4 col-md-6 mb-4">

                        <h3 className="fw-bold">
                            <i className="fa-brands fa-shopify me-2"></i>
                            SHOPIFY
                        </h3>

                        <p className="text-secondary mt-3">
                            Discover amazing products at great prices.
                            Shop your favourites and enjoy a simple
                            shopping experience.
                        </p>

                    </div>


                    {/* QUICK LINKS */}
                    <div className="col-lg-4 col-md-6 mb-4">

                        <h5 className="fw-bold mb-3">
                            Quick Links
                        </h5>

                        <div className="d-flex flex-column gap-2">

                            <Link
                                to="/"
                                className="text-white text-decoration-none"
                            >
                                Home
                            </Link>

                            <Link
                                to="/wishlist"
                                className="text-white text-decoration-none"
                            >
                                Wishlist
                            </Link>

                            <Link
                                to="/cart"
                                className="text-white text-decoration-none"
                            >
                                Cart
                            </Link>

                        </div>

                    </div>


                    {/* CONTACT */}
                    <div className="col-lg-4 col-md-12 mb-4">

                        <h5 className="fw-bold mb-3">
                            Contact Us
                        </h5>

                        <p className="text-secondary mb-2">
                            <i className="fa-solid fa-envelope me-2"></i>
                            support@shopify.com
                        </p>

                        <p className="text-secondary mb-2">
                            <i className="fa-solid fa-phone me-2"></i>
                            +91 98765 43210
                        </p>

                        <div className="mt-3">

                            <i className="fa-brands fa-facebook fs-4 me-3"></i>
                            <i className="fa-brands fa-instagram fs-4 me-3"></i>
                            <i className="fa-brands fa-twitter fs-4"></i>

                        </div>

                    </div>

                </div>

            </div>


            {/* COPYRIGHT */}

            <div className="border-top border-secondary">

                <div className="container py-3 text-center">

                    <p className="mb-0 text-secondary">
                        © 2026 SHOPIFY. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer