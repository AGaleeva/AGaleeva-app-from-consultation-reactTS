import { useEffect, useState } from 'react';
import { ProductCardsWrapper, ProductCardContainer, ImageContainer } from './styles';
import IProduct from './type';

function ProductPage() {

  const [products, setProducts] = useState<IProduct[]>([]);
  async function GetProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ textAlign: "center" }}>Product Page</h2>
      <ProductCardsWrapper>
        {products.map((el) => (
          <ProductCardContainer>
            <h5>{el.title}</h5>
            <ImageContainer>
              <img src={el.image} alt="image" />
            </ImageContainer>
          </ProductCardContainer>
        ))}
      </ProductCardsWrapper>
    </div>
  );
}

export default ProductPage;