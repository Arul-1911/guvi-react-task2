import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({product,AddtoCart}) {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
        <div className="card">
          <img className="card-img-top " style={{height:'200px'}} src={product.imageUrl} alt="Product image" />
          <hr/>
          <div className="card-body">
            <h5 className="card-title">{product.productName}</h5>
            <p className="card-text">{product.price}</p>
            <button className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center' }} onClick={()=>AddtoCart(product)}>
            Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCard;
