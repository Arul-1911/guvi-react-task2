import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function MyComponent({ cartItems, RemovefromCart }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Shopping Cart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
            </ul>
            <form onSubmit={(e) => e.preventDefault()}>
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Your Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cartItems.length}
                </span>
                {/* Display added items in a dropdown */}
                {cartItems.length > 0 && (
                  <div className="cart-dropdown">
                    <ul className="list-group list-group-numbered">
                      {cartItems.map((item, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.productName}</div>
                            {item.price}
                          </div>
                          <span className="badge bg-primary rounded-pill">
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => RemovefromCart(item)}
                            >
                              Remove
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MyComponent;
