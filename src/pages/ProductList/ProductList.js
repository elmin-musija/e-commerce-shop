import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from 'react';
import ProductItem from "../../components/ProductItem/ProductItem";

const ProductList = (props) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products/?limit=20')
      .then(response => response.json())
      .then(json => {
        setData(json.products);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
   return <p>is Loading.....</p>
  } 

  console.log(data);

  return (
    <div className="product-list">
      <SearchBar className="product-list__searchbar" />
      <p className="product-list__p">Sort by: </p>
      <div className="product-list-props">
       {data.map((element, index) => {
      return <ProductItem key={index} pr_image={element.images[0]} pr_alt={element.brand} 
      pr_rating={element.rating} pr_price={element.price} />
    })}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
