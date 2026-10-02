import React, { useEffect, useState } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Badge
} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Product() {

    const { id } = useParams()

    const dispatch = useDispatch()

    const [product, setProduct] = useState({})

    const wishlist = useSelector(state => state.wishlist)
    const cart = useSelector(state => state.cart)

    useEffect(() => {

        const savedProducts = localStorage.getItem('products')

        if (savedProducts) {

            const allProducts = JSON.parse(savedProducts)

            const selectedProduct = allProducts.find(
                pro => pro.id == id
            )

            setProduct(selectedProduct || {})

        }

    }, [id])


    // Wishlist

    const handleWishlist = () => {

        const existingProduct = wishlist.find(
            pro => pro.id == product.id
        )

        if (existingProduct) {

            alert("Product already in your wishlist.")

        }
        else {

            dispatch(addToWishlist(product))

            alert("Product added to wishlist.")

        }

    }


    // Cart

    const handleCart = () => {

        const existingProduct = cart.find(
            pro => pro.id == product.id
        )

        dispatch(addToCart(product))

        if (existingProduct) {

            alert("Product quantity incremented.")

        }
        else {

            alert("Product added to cart.")

        }

    }


    return (

        <>

            <Header />

            <Container className="py-5">

                {/* Breadcrumb */}

                <div className="mb-4">

                    <Link
                        to="/"
                        className="text-decoration-none text-secondary"
                    >
                        Home
                    </Link>

                    <span className="mx-2 text-secondary">
                        /
                    </span>

                    <span className="text-dark">
                        Product
                    </span>

                </div>


                <Card className="border-0 shadow-sm rounded-4 overflow-hidden">

                    <Row className="g-0">


                        {/* PRODUCT IMAGE */}

                        <Col
                            md={6}
                            className="bg-light d-flex align-items-center justify-content-center p-5"
                        >

                            <img
                                src={product?.thumbnail}
                                alt={product?.title}
                                className="img-fluid"
                                style={{
                                    height: '450px',
                                    width: '100%',
                                    objectFit: 'contain'
                                }}
                            />

                        </Col>


                        {/* PRODUCT DETAILS */}

                        <Col md={6}>

                            <div className="p-4 p-lg-5">


                                {/* CATEGORY */}

                                <Badge
                                    bg="dark"
                                    className="px-3 py-2 mb-3"
                                >
                                    {product?.category}
                                </Badge>


                                {/* TITLE */}

                                <h1 className="fw-bold mb-3">
                                    {product?.title}
                                </h1>


                                {/* RATING */}

                                <div className="d-flex align-items-center mb-4">

                                    <span className="text-warning fs-5">
                                        ★★★★★
                                    </span>

                                    <span className="text-secondary ms-2">
                                        {product?.rating?.toFixed
                                            ? product.rating.toFixed(1)
                                            : '4.5'}
                                    </span>

                                    <span className="text-secondary ms-2">
                                        • Reviews
                                    </span>

                                </div>


                                {/* PRICE */}

                                <h2 className="fw-bold text-success mb-4">
                                    ₹{product?.price}
                                </h2>


                                <hr />


                                {/* DESCRIPTION */}

                                <h5 className="fw-bold mt-4">
                                    Product Description
                                </h5>

                                <p className="text-secondary lh-lg">
                                    {product?.description}
                                </p>


                                {/* STOCK */}

                                <div className="d-flex align-items-center gap-2 mt-4">

                                    <i className="fa-solid fa-circle-check text-success"></i>

                                    <span className="text-success fw-semibold">
                                        In Stock
                                    </span>

                                </div>


                                {/* BUTTONS */}

                                <div className="d-flex gap-3 mt-4">

                                    <Button
                                        variant="dark"
                                        size="lg"
                                        className="px-4"
                                        onClick={handleCart}
                                    >
                                        <i className="fa-solid fa-cart-plus me-2"></i>
                                        Add to Cart
                                    </Button>


                                    <Button
                                        variant="outline-danger"
                                        size="lg"
                                        className="px-4"
                                        onClick={handleWishlist}
                                    >
                                        <i className="fa-solid fa-heart me-2"></i>
                                        Wishlist
                                    </Button>

                                </div>


                                {/* EXTRA INFORMATION */}

                                <div className="mt-5">

                                    <Row className="g-3">

                                        <Col sm={4}>

                                            <div className="text-center border rounded-3 p-3 h-100">

                                                <i className="fa-solid fa-truck fs-4 mb-2"></i>

                                                <div className="fw-semibold">
                                                    Free Delivery
                                                </div>

                                                <small className="text-secondary">
                                                    On selected orders
                                                </small>

                                            </div>

                                        </Col>


                                        <Col sm={4}>

                                            <div className="text-center border rounded-3 p-3 h-100">

                                                <i className="fa-solid fa-shield-halved fs-4 mb-2"></i>

                                                <div className="fw-semibold">
                                                    Secure Payment
                                                </div>

                                                <small className="text-secondary">
                                                    Safe & secure
                                                </small>

                                            </div>

                                        </Col>


                                        <Col sm={4}>

                                            <div className="text-center border rounded-3 p-3 h-100">

                                                <i className="fa-solid fa-rotate-left fs-4 mb-2"></i>

                                                <div className="fw-semibold">
                                                    Easy Returns
                                                </div>

                                                <small className="text-secondary">
                                                    Hassle-free returns
                                                </small>

                                            </div>

                                        </Col>

                                    </Row>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Card>

            </Container>

        </>

    )
}

export default Product