import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart
} from '../redux/slices/cartSlice'

function Cart() {

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()


  // Total number of products

  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  )


  // Grand total

  const grandTotal = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  )


  return (

    <>

      <Header />

      <Container className="py-5">


        {/* PAGE HEADER */}

        <div className="text-center mb-5">

          <div className="mb-3">

            <i className="fa-solid fa-cart-shopping text-success fs-1"></i>

          </div>

          <h1 className="fw-bold">
            My Cart
          </h1>

          <p className="text-secondary mb-0">
            Review your selected products before placing your order.
          </p>

        </div>


        {
          cart.length > 0 ? (

            <Row className="g-4">


              {/* CART PRODUCTS */}

              <Col lg={8}>

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <h5 className="fw-bold mb-0">
                    Your Products
                  </h5>

                  <Badge
                    bg="dark"
                    className="px-3 py-2 rounded-pill"
                  >
                    {totalItems} Items
                  </Badge>

                </div>


                {
                  cart.map(product => (

                    <Card
                      key={product.id}
                      className="border-0 shadow-sm rounded-4 mb-4"
                    >

                      <Card.Body className="p-4">

                        <Row className="align-items-center g-4">


                          {/* IMAGE */}

                          <Col
                            xs={12}
                            sm={3}
                            className="text-center"
                          >

                            <div
                              className="bg-light rounded-3 d-flex align-items-center justify-content-center"
                              style={{
                                height: '150px'
                              }}
                            >

                              <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="img-fluid p-2"
                                style={{
                                  height: '140px',
                                  width: '100%',
                                  objectFit: 'contain'
                                }}
                              />

                            </div>

                          </Col>


                          {/* DETAILS */}

                          <Col sm={4}>

                            <small className="text-secondary text-uppercase fw-semibold">
                              {product.category}
                            </small>

                            <h5 className="fw-bold mt-2 mb-2">
                              {product.title}
                            </h5>

                            <h6 className="text-success fw-bold">
                              ₹{product.price}
                            </h6>

                          </Col>


                          {/* QUANTITY */}

                          <Col
                            sm={3}
                            className="text-center"
                          >

                            <small className="text-secondary d-block mb-2">
                              Quantity
                            </small>

                            <div className="d-flex align-items-center justify-content-center">

                              <Button
                                variant="light"
                                className="border rounded-start-3"
                                onClick={() =>
                                  dispatch(
                                    decrementQuantity(
                                      product.id
                                    )
                                  )
                                }
                              >
                                −
                              </Button>

                              <div
                                className="border-top border-bottom px-3 py-2 fw-bold"
                              >
                                {product.quantity}
                              </div>

                              <Button
                                variant="light"
                                className="border rounded-end-3"
                                onClick={() =>
                                  dispatch(
                                    incrementQuantity(
                                      product.id
                                    )
                                  )
                                }
                              >
                                +
                              </Button>

                            </div>

                          </Col>


                          {/* REMOVE */}

                          <Col
                            sm={2}
                            className="text-center"
                          >

                            <button
                              className="btn btn-light rounded-circle shadow-sm"
                              onClick={() =>
                                dispatch(
                                  removeFromCart(
                                    product.id
                                  )
                                )
                              }
                              title="Remove"
                            >

                              <i className="fa-solid fa-trash text-danger"></i>

                            </button>

                          </Col>

                        </Row>


                        {/* ITEM TOTAL */}

                        <div className="border-top mt-4 pt-3 text-end">

                          <span className="text-secondary me-2">
                            Item Total:
                          </span>

                          <span className="fw-bold">
                            ₹{product.price * product.quantity}
                          </span>

                        </div>

                      </Card.Body>

                    </Card>

                  ))
                }


                {/* CLEAR CART */}

                <div className="text-end">

                  <Button
                    variant="outline-danger"
                    onClick={() =>
                      dispatch(clearCart())
                    }
                  >

                    <i className="fa-solid fa-trash me-2"></i>

                    Clear Cart

                  </Button>

                </div>

              </Col>


              {/* ORDER SUMMARY */}

              <Col lg={4}>

                <Card
                  className="border-0 shadow-sm rounded-4"
                >

                  <Card.Body className="p-4">


                    <h4 className="fw-bold mb-4">
                      Order Summary
                    </h4>


                    {/* ITEMS */}

                    <div className="d-flex justify-content-between mb-3">

                      <span className="text-secondary">
                        Total Items
                      </span>

                      <span className="fw-semibold">
                        {totalItems}
                      </span>

                    </div>


                    {/* PRODUCTS */}

                    <div className="d-flex justify-content-between mb-3">

                      <span className="text-secondary">
                        Products
                      </span>

                      <span className="fw-semibold">
                        {cart.length}
                      </span>

                    </div>


                    <hr />


                    {/* TOTAL */}

                    <div className="d-flex justify-content-between align-items-center">

                      <h5 className="fw-bold mb-0">
                        Grand Total
                      </h5>

                      <h4 className="fw-bold text-success mb-0">
                        ₹{grandTotal}
                      </h4>

                    </div>


                    {/* INFO */}

                    <div className="bg-light rounded-3 p-3 mt-4">

                      <div className="d-flex gap-2">

                        <i className="fa-solid fa-shield-halved text-success mt-1"></i>

                        <small className="text-secondary">
                          Your cart items are saved securely.
                        </small>

                      </div>

                    </div>


                    {/* CONTINUE SHOPPING */}

                    <Link
                      to="/"
                      className="text-decoration-none"
                    >

                      <Button
                        variant="dark"
                        className="w-100 mt-4 py-2"
                      >

                        <i className="fa-solid fa-arrow-left me-2"></i>

                        Continue Shopping

                      </Button>

                    </Link>

                  </Card.Body>

                </Card>

              </Col>

            </Row>

          ) : (


            /* EMPTY CART */

            <div className="text-center py-5">

              <div className="mb-4">

                <i
                  className="fa-solid fa-cart-shopping text-secondary"
                  style={{
                    fontSize: '80px'
                  }}
                ></i>

              </div>

              <h2 className="fw-bold">
                Your Cart is Empty
              </h2>

              <p className="text-secondary fs-5 mb-4">
                Looks like you haven't added anything to your cart yet.
              </p>

              <Link
                to="/"
                className="btn btn-dark px-4 py-2"
              >

                <i className="fa-solid fa-store me-2"></i>

                Explore Products

              </Link>

            </div>

          )

        }

      </Container>

    </>

  )
}

export default Cart