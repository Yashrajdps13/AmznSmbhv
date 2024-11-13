// import React, { useEffect, useState } from 'react';
// import './Home.css';
// import Product from './Product';
// import axios from 'axios';

// function Home() {

// const [productData, setProductData] = useState([]);

// useEffect(() => {
//   const postData = {
//     caption: "first post",
//     comments_count: 0,
//     id: "18030180695134507",
//     like_count: 0,
//     media_type: "IMAGE",
//     media_url: "https://scontent-syd2-1.cdninstagram.com/v/t51.29350-15/465663312_1682914228938430_7339956495998990773_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=pgO4G9ICHp4Q7kNvgGxSDZd&_nc_zt=23&_nc_ht=scontent-syd2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AWQE1RVmK-sR9b3-hWNzLiR&oh=00_AYDrJmzO4DX4PzDat0wTKjEccdi14nrqCIofrPJYBelURg&oe=673444F0",
//     permalink: "https://www.instagram.com/p/DB6V6A5zUtp/",
//     timestamp: "2024-11-03T13:53:28+0000"
//   };

//   fetch("https://8190-01jcads8peb6rh86q9tfxvchmr.cloudspaces.litng.ai/predict", {
//     method: "POST", 
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(postData) 
//   })
//     .then(response => response.json())
//     .then(data => {
//       try {
//         // Parse the result string as JSON
//         const parsedData = JSON.parse(data.result);
//         setProductData([parsedData]);
//       } catch (error) {
//         console.error("Error parsing product data:", error);
//       }
//     })
//     .catch(error => {
//       console.error("Error fetching product data:", error);
//     });
// }, []);




//     return (
//         <div className="home">
//             <div className="home-container">
//                 <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home-image" />

//                 {/* <div className="home-row">
//                     <Product 
//                         id = {122322}
//                         title="A Game of Thrones (Song of Ice and Fire) Hardcover – August 1, 1996" 
//                         price = {26.29}
//                         image="https://kbimages1-a.akamaihd.net/a26bb671-977c-4324-a6af-486847cdbe32/1200/1200/False/a-game-of-thrones-a-song-of-ice-and-fire-book-1.jpg"
//                         rating={5}
//                         author="by George R.R. Martin"
//                         subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"

//                     />
//                     <Product 
//                         id = {122323}

//                         title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver" 
//                         price = {364.99}
//                         image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
//                         rating={4}
//                         author="by Acer"

//                     />
//                 </div>

//                 <div className="home-row">
//                 <Product 
//                         id = {122325}
//                         title="SAMSUNG 75-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q70TAFXZA, 2020 Model)" 
//                         price = {100.29}
//                         image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SL1000_.jpg"
//                         rating={4}
//                         author="by Samsung"
                        
//                 />
//                 <Product 
//                         id = {122326}
//                         title="OtterBox Defender Series Case for iPad Pro 11(1st Gen) - Retail Packaging - Black" 
//                         price = {11.99}
//                         image="https://images-na.ssl-images-amazon.com/images/I/51o%2ByhvbK-L._AC_SL1000_.jpg"
//                         rating={5}
//                         author="by OtterBox Store"
//                         subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus"

//                     />
//                 <Product 
//                         id = {122321}
//                         title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR" 
//                         price = {9.99}
//                         image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
//                         rating={3}
//                         author="by Samsung Electronics Store"
//                         subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"

//                     />
//                 </div> */}

//                 <div className="home-row">
//                 {/* {productData.length > 0 && productData.map((product, index) => (
//                       <Product
//                       id={index}
//                         title={product.title}
//                         subtitle={product.description}
//                         image={product.image || 'https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg'} // Using media_url if image is not available
//                         price={product.price}
//                          rating={5}
//                         author="by LG Store"
//                       />
//                     ))} */}
//                     <Product 
//                         id = {122327}
//                         title="LG 65UN7300PUF Alexa Built-In UHD 73 Series 65 4K Smart UHD TV (2020" 
//                         price = {300.99}
//                         image="https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg"
//                         rating={5}
//                         author="by LG Store"
//                         subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"

//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;


// import React, { useEffect, useState } from 'react';
// import './Home.css';
// import Product from './Product';
// import axios from 'axios';

// function Home() {
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     const postData = {
//       caption: "first post",
//       comments_count: 0,
//       id: "18030180695134507",
//       like_count: 0,
//       media_type: "IMAGE",
//       media_url: "https://images.squarespace-cdn.com/content/53c631e4e4b0c4d68989cbef/1410108840901-IEFZ70HBZV994QEBJMC0/DSC1195.jpg?content-type=image%2Fjpeg",
//       permalink: "https://www.instagram.com/p/DB6V6A5zUtp/",
//       timestamp: "2024-11-03T13:53:28+0000"
//     };

//     axios.post("https://8190-01jcads8peb6rh86q9tfxvchmr.cloudspaces.litng.ai/predict", postData)
//       .then(response => {
//         const data = response.data.result;
//         // Manually parse and structure the data for the Product component
//         const parsedData = {
//           title: data.title,
//           description: data.description,
//           image: `data:image/jpeg;base64,${data.image}`,
//           price: data.price,
//           attributes: data.attributes,
//         };
//         setProductData([parsedData]);
//       })
//       .catch(error => {
//         console.error("Error fetching product data:", error);
//       });
//   }, []);

//   return (
//     <div className="home">
//       <div className="home-container">
//         <img
//           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//           className="home-image"
//           alt="Home Banner"
//         />

//         <div className="home-row">
//           {productData.length > 0 && productData.map((product, index) => (
//             <Product
              
//               id={index}
//               title={product.title}
//               description={product.description}
//               image={product.image || 'https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg'}
//               price={product.price || '300'}
              
//               rating={5}
//               author="by LG Store"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './Product';
import axios from 'axios';

function Home() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    const postData = {
      caption: "first post",
      comments_count: 0,
      id: "18030180695134507",
      like_count: 0,
      media_type: "IMAGE",
      media_url: "https://images.squarespace-cdn.com/content/53c631e4e4b0c4d68989cbef/1410108840901-IEFZ70HBZV994QEBJMC0/DSC1195.jpg?content-type=image%2Fjpeg",
      permalink: "https://www.instagram.com/p/DB6V6A5zUtp/",
      timestamp: "2024-11-03T13:53:28+0000"
    };

    axios.post("https://8190-01jcads8peb6rh86q9tfxvchmr.cloudspaces.litng.ai/predict", postData)
      .then(response => {
        const data = response.data.result;
        const parsedData = {
          title: data.title,
          description: data.description,
          image: `data:image/jpeg;base64,${data.image}`,
          price: data.price,
          attributes: data.attributes,
        };
        setProductData([parsedData]);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
        setLoading(false); // Set loading to false even if there’s an error
      });
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home-image"
          alt="Home Banner"
        />

        <div className="home-row">
          {loading ? (
            <div className="loader">Loading...</div> // Loader display
          ) : (
            productData.map((product, index) => (
              <Product
                key={index}
                id={index}
                title={product.title}
                description={product.description}
                image={product.image || 'https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg'}
                price={product.price || '300'}
                rating={5}
                author="by LG Store"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;



