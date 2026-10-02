import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
    return (
        <div
            className="container d-flex align-items-center justify-content-center text-center"
            style={{ minHeight: '70vh' }}
        >

            <div>

                <h1
                    className="fw-bold text-dark"
                    style={{ fontSize: '100px' }}
                >
                    404
                </h1>

                <h2 className="fw-bold">
                    Page Not Found
                </h2>

                <p className="text-secondary fs-5">
                    Sorry, the page you are looking for doesn't exist.
                </p>

                <Link
                    to="/"
                    className="btn btn-dark px-4 py-2 mt-3"
                >
                    <i className="fa-solid fa-house me-2"></i>
                    Back to Home
                </Link>

            </div>

        </div>
    )
}

export default Pnf