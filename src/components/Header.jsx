import React, { useState } from 'react'
import {
    Container,
    Navbar,
    Row,
    Col,
    Form,
    Button,
    Nav,
    Badge
} from 'react-bootstrap'
import { FaSearch, FaShopify } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'

function Header({ insideLanding }) {

    const [searchText, setSearchText] = useState('')

    const dispatch = useDispatch()

    const wishlist = useSelector(state => state.wishlist)
    const cart = useSelector(state => state.cart)


    const handleSearch = (e) => {

        e.preventDefault()

        dispatch(searchProducts(searchText))

    }


    return (
        <Navbar
            bg="white"
           className="border-bottom shadow-sm py-3 sticky-top"
        >

            <Container fluid>

                <Row className="w-100 align-items-center">

                    {/* LOGO */}

                    <Col md={3}>

                        <div className="d-flex align-items-center gap-2">

                            <Link
                                to="/"
                                className="text-dark text-decoration-none d-flex align-items-center gap-2"
                            >

                                <FaShopify className="fs-2" />

                                <span className="fw-bold fs-4">
                                    SHOPIFY
                                </span>

                            </Link>

                        </div>

                    </Col>


                    {/* SEARCH */}

                    {
                        insideLanding && (

                            <Col md={3}>

                                <Form
                                    className="d-flex"
                                    onSubmit={handleSearch}
                                >

                                    <Form.Control
                                        type="search"
                                        placeholder="Search products..."
                                        className="rounded-start-pill"
                                        value={searchText}
                                        onChange={(e) =>
                                            setSearchText(e.target.value)
                                        }
                                    />

                                    <Button
                                        type="submit"
                                        variant="dark"
                                        className="rounded-end-pill px-4"
                                    >
                                        <FaSearch />
                                    </Button>

                                </Form>

                            </Col>

                        )
                    }


                    {/* WISHLIST + CART */}

                    <Col
                        md={3}
                        className="ms-auto"
                    >

                        <Nav className="justify-content-end">

                            {/* WISHLIST */}

                            <Nav.Link
                                as={Link}
                                to="/wishlist"
                            >

                                <i className="fa-solid fa-heart text-danger fa-2xl"></i>

                                <Badge className="fs-5 bg-transparent text-dark">
                                    {wishlist?.length || 0}
                                </Badge>

                            </Nav.Link>


                            {/* CART */}

                            <Nav.Link
                                as={Link}
                                to="/cart"
                            >

                                <i className="fa-solid fa-cart-shopping text-success fa-2xl"></i>

                                <Badge className="fs-5 bg-transparent text-dark">
                                    {cart?.length || 0}
                                </Badge>

                            </Nav.Link>

                        </Nav>

                    </Col>

                </Row>

            </Container>

        </Navbar>
    )
}

export default Header