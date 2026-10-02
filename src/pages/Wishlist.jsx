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
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {

  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()


  // Add product to cart

  const handleCart = (product) => {

    const existingProduct = cart.find(
        pro => pro.id == product.id
    )

    dispatch(addToCart(product))

    // Remove product from wishlist
    dispatch(removeFromWishlist(product.id))

    if (existingProduct) {
        alert("Product quantity incremented.")
    }
    else {
        alert("Product added to cart.")
    }

}


  // Remove from wishlist

  const handleRemove = (id) => {

    dispatch(removeFromWishlist(id))

  }


  return (

    <>

      <Header />

      <Container className="py-5">

        {/* PAGE HEADER */}

        <div className="text-center mb-5">

          <div className="mb-3">

            <i className="fa-solid fa-heart text-danger fs-1"></i>

          </div>

          <h1 className="fw-bold">
            My Wishlist
          </h1>

          <p className="text-secondary mb-0">
            Save your favourite products and shop them whenever you want.
          </p>

        </div>


        {/* WISHLIST COUNT */}

        {
          wishlist.length > 0 && (

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h5 className="fw-bold mb-0">
                Saved Products
              </h5>

              <Badge
                bg="dark"
                className="px-3 py-2 rounded-pill"
              >
                {wishlist.length} Products
              </Badge>

            </div>

          )
        }


        {/* PRODUCTS */}

        {
          wishlist.length > 0 ? (

            <Row className="g-4">

              {
                wishlist.map(product => (

                  <Col
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                  >

                    <Card
                      className="h-100 border-0 shadow-sm rounded-4 overflow-hidden"
                    >


                      {/* IMAGE */}

                      <div
                        className="position-relative bg-light d-flex align-items-center justify-content-center"
                        style={{
                          height: '250px'
                        }}
                      >

                        <Card.Img
                          src={product.thumbnail}
                          alt={product.title}
                          className="p-3"
                          style={{
                            height: '230px',
                            width: '100%',
                            objectFit: 'contain'
                          }}
                        />


                        {/* REMOVE HEART */}

                        <Button
                          variant="light"
                          className="position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
                          style={{
                            width: '42px',
                            height: '42px'
                          }}
                          onClick={() =>
                            handleRemove(product.id)
                          }
                        >

                          <i className="fa-solid fa-heart text-danger"></i>

                        </Button>

                      </div>


                      {/* DETAILS */}

                      <Card.Body className="d-flex flex-column p-4">


                        {/* CATEGORY */}

                        <small className="text-secondary text-uppercase fw-semibold mb-2">
                          {product.category}
                        </small>


                        {/* TITLE */}

                        <Card.Title className="fw-bold mb-2">
                          {product.title}
                        </Card.Title>


                        {/* RATING */}

                        <div className="mb-3">

                          <span className="text-warning">
                            ★★★★★
                          </span>

                          <small className="text-secondary ms-2">
                            {product.rating || '4.5'}
                          </small>

                        </div>


                        {/* PRICE */}

                        <h5 className="fw-bold text-success mb-4">
                          ₹{product.price}
                        </h5>


                        {/* BUTTONS */}

                        <div className="d-flex gap-2 mt-auto">


                          {/* VIEW */}

                          <Link
                            to={`/product/${product.id}/view`}
                            className="flex-grow-1 text-decoration-none"
                          >

                            <Button
                              variant="outline-dark"
                              className="w-100"
                            >
                              View
                            </Button>

                          </Link>


                          {/* CART */}

                          <Button
                            variant="dark"
                            className="flex-grow-1"
                            onClick={() =>
                              handleCart(product)
                            }
                          >

                            <i className="fa-solid fa-cart-plus me-2"></i>

                            Cart

                          </Button>

                        </div>

                      </Card.Body>

                    </Card>

                  </Col>

                ))
              }

            </Row>

          ) : (

            /* EMPTY WISHLIST */

            <div className="text-center py-5">

              <div className="mb-4">

                <i className="fa-regular fa-heart text-secondary"
                  style={{ fontSize: '80px' }}
                ></i>

              </div>

              <h2 className="fw-bold">
                Your Wishlist is Empty
              </h2>

              <p className="text-secondary fs-5 mb-4">
                You haven't saved any products yet.
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

export default Wishlist