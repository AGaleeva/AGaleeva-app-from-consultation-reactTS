import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 10px 10px;
`;

export const ProductCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-top: 10px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;