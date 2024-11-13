// // import { CenterFocusStrongOutlined } from "@material-ui/icons";s
// import React from "react";
// import "./Product.css";
// import StarIcon from '@mui/icons-material/Star';
// import { useStateValue } from "../StateProvider";

// function Product({id, title, image, price, rating, author, subtitle }) {


//   return (
//     <div className="product">
//       <div className="product-info">
//         <p className="product-title">{title}</p>
//         <p className="product-subtitle">{subtitle}</p>
//         <p className="product-author">{author}</p>
//         <div className="product-business">
//           <div className="product-rating">
//             {Array(rating)
//               .fill()
//               .map((_, i) => (
//                 <StarIcon className="star-icon" />
//               ))}
//           </div>

//           <p className="product_price">
//             <h2>$ {price}</h2>
//           </p>
//         </div>
//       </div>

//       <img src={image}></img>

//       <button onClick = {addToBasket}>Add to Basket</button>
//     </div>
//   );
// }

// export default Product;


// // import React from 'react';
// // import './Product.css';

// // function Product({ title, image, description }) {
// //   return (
// //     <div className="product">
// //       <img src={image} alt={title} className="product-image" />
// //       <h2 className="product-title">{title}</h2>
// //       <p className="product-description">{description}</p>
// //     </div>
// //   );
// // }

// // export default Product;

import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating = 4, author, description, attributes }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-description">{description}</p>
        {attributes && (
          <div className="product-attributes">
            {Object.entries(attributes).map(([key, value]) => (
              <p key={key}>{`${key}: ${value}`}</p>
            ))}
          </div>
        )}
        <div className="product-business">
          <div className="product-rating">
            {Array(rating).fill().map((_, i) => (
              <StarIcon key={i} className="star-icon" />
            ))}
          </div>
          <p className="product_price">
            <h2>$ {price}</h2>
          </p>
        </div>
      </div>
      <img src={image} alt={title} />
      {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  );
}

export default Product;



// import React from "react";
// import "./Product.css";

// function Product({ title, image, description, price }) {
//   return (
//     <div className="product">
//       <img src={image} alt={title} className="product-image" />
//       <h2 className="product-title">{title}</h2>
//       <p className="product-description">{description}</p>
//       <p className="product-price">$ {price}</p>
//     </div>
//   );
// }

// export default Product;


