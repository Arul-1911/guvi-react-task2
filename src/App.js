import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Footer from "./Footer";
import MyComponent from "./Header";
import MyCard from "./Card";
import CartItems from "./CartItem";
function App() {

let product = [ {
  id: 1,
  productName: 'Laptop',
  price: '$40.00 - $80.00',
  imageUrl: 'https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg'},
{
  id: 2,
  productName: 'Smartphone',
  price:"$20.00 - $18.00",
  imageUrl: 'https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png'
},
{
  id: 3,
  productName: 'Headphones',
  price: "$50.00 - $25.00",
  imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-airpods-max-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603996970000'
},
{
  id: 4,
  productName: 'Coffee Maker',
  price: "$40.00",
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPlKN-BKqcJL22Aw-CdG6Or15aVbWEPrVbw&usqp=CAU'
},
{
  id: 5,
  productName: 'Running Shoes',
  price:'$50.00 - $25.00',
  imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D'
},
{
  id: 6,
  productName: 'Backpack',
  price: "$120.00 - $280.00",
  imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-9904.jpg'
},
{
  id: 7,
  productName: 'Wireless Mouse',
  price: "$20.00 $18.00",
  imageUrl: 'https://i.rtings.com/assets/products/ykNvre4M/steelseries-prime-wireless/design-medium.jpg'
},
{
  id: 8,
  productName: 'Desk Lamp',
  price: "$40.00",
  imageUrl: 'https://wakefitdev.gumlet.io/img/study_lamps/new/Euclid/1.jpg?w=732'
}];

const [cartItems , setCartItems] = useState([]);

const AddtoCart = (item) => {
  setCartItems ([...cartItems,item]);
  alert(`${item.productName} Added to the Cart`)
};

const RemovefromCart = (item) => {
  const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
  setCartItems(updatedCart);
};


  return (
    <div>
      <MyComponent cartItems={cartItems} RemovefromCart={RemovefromCart}></MyComponent>
      <div className="container">
        <div className="row">
        {
      product.map((detail,index) => {
        return <MyCard product={detail} key={index}  AddtoCart={() => AddtoCart(detail)}
        RemovefromCart={() => RemovefromCart(detail)}></MyCard>
      })
    }
        </div>
      </div>
      <br />
      <CartItems items={cartItems} RemovefromCart={RemovefromCart}></CartItems>
      <Footer></Footer>
    </div>
  );
}

export default App;
