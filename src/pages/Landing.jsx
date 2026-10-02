import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import {
    Card,
    Button,
    Spinner,
    Container,
    Row,
    Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/Pagination'

function Landing() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    const {
        allProducts,
        loading,
        error
    } = useSelector(state => state.products)


    const [currentPage, setCurrentPage] = useState(1)

    const cardPerPage = 8

    const endingIndex = currentPage * cardPerPage

    const startingIndex = endingIndex - cardPerPage

    const currentProducts = allProducts.slice(
        startingIndex,
        endingIndex
    )


    return (
        <>
            {/* HEADER */}

            <Header insideLanding={true} />


            {/* HOME PAGE BACKGROUND */}

            <div className="bg-body-secondary min-vh-100">

                <Container className="py-5">


                    {/* PAGE TITLE */}

                    <div className="text-center mb-5">

                        <h2 className="fw-bold display-6">
                            Our Products
                        </h2>

                        <p className="text-secondary fs-5">
                            Discover products you'll love
                        </p>

                    </div>


                    {/* LOADING */}

                    {
                        loading ? (

                            <div className="text-center py-5">

                                <Spinner
                                    animation="border"
                                    variant="dark"
                                    style={{
                                        width: '3rem',
                                        height: '3rem'
                                    }}
                                />

                                <p className="mt-3 text-secondary">
                                    Loading products...
                                </p>

                            </div>

                        ) : error ? (

                            /* ERROR */

                            <div className="text-center py-5">

                                <h4 className="text-danger">
                                    {error}
                                </h4>

                            </div>

                        ) : (

                            <>


                                {/* PRODUCTS */}

                                {
                                    currentProducts.length > 0 ? (

                                        <Row
                                            xs={1}
                                            sm={2}
                                            md={3}
                                            lg={4}
                                            className="g-4"
                                        >

                                            {
                                                currentProducts.map(product => (

                                                    <Col key={product.id}>

                                                        <Card
                                                            className="h-100 border-0 shadow-sm rounded-4 bg-white overflow-hidden"
                                                        >


                                                            {/* PRODUCT IMAGE */}

                                                            <div
                                                                className="bg-light d-flex align-items-center justify-content-center"
                                                                style={{
                                                                    height: '230px'
                                                                }}
                                                            >

                                                                <Card.Img
                                                                    src={product.thumbnail}
                                                                    alt={product.title}
                                                                    className="p-3"
                                                                    style={{
                                                                        height: '210px',
                                                                        objectFit: 'contain'
                                                                    }}
                                                                />

                                                            </div>


                                                            {/* PRODUCT DETAILS */}

                                                            <Card.Body className="d-flex flex-column p-4">


                                                                {/* PRODUCT NAME */}

                                                                <Card.Title
                                                                    className="fw-bold text-center mb-3"
                                                                >
                                                                    {product.title}
                                                                </Card.Title>


                                                                {/* PRICE */}

                                                                <h5 className="text-success fw-bold text-center mb-4">
                                                                    ₹{product.price}
                                                                </h5>


                                                                {/* VIEW PRODUCT */}

                                                                <Link
                                                                    to={`/product/${product.id}/view`}
                                                                    className="mt-auto text-decoration-none"
                                                                >

                                                                    <Button
                                                                        variant="dark"
                                                                        className="w-100 rounded-3 py-2"
                                                                    >
                                                                        View Product
                                                                    </Button>

                                                                </Link>

                                                            </Card.Body>

                                                        </Card>

                                                    </Col>

                                                ))
                                            }

                                        </Row>

                                    ) : (

                                        /* NO PRODUCTS */

                                        <div className="text-center py-5">

                                            <h4 className="fw-bold">
                                                No products found!
                                            </h4>

                                            <p className="text-secondary">
                                                Try searching for another product.
                                            </p>

                                        </div>

                                    )
                                }


                                {/* PAGINATION */}

                                {
                                    allProducts.length > cardPerPage && (

                                        <div className="d-flex justify-content-center mt-5">

                                            <Pagination
                                                totalProducts={allProducts.length}
                                                productPerPage={cardPerPage}
                                                setCurrentPage={setCurrentPage}
                                                currentPage={currentPage}
                                            />

                                        </div>

                                    )
                                }

                            </>

                        )
                    }

                </Container>

            </div>

        </>
    )
}

export default Landing