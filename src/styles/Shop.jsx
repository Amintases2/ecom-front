import styled from "styled-components";
import {bodyColors, device} from "./global.jsx";

const ProductsWrapper = styled.div`   
    color: ${bodyColors.mainTextColor};
    display: flex;
    flex-wrap: wrap;
    width:100%;
    cursor:pointer;
   

`
const ProductCard = styled.div`
    padding:10px;
    flex: 1 1 25%;
    margin:10px;
    text-align:center;
    background-color: ${bodyColors.mainBlockBackgroundColor};
    > img {
         transition: 0.2s ease-in-out;
    }
    
    &:hover{
        >img{
            transform: scale(1.1);
        }
    }
    
    >img{
        max-width:200px;
    }
    @media ${device.mobileL} { 
        >img{
            max-width:300px;
        }
    }
    @media ${device.laptop} { 
        >img{
            max-width:400px;
        }
    }
`

export {ProductCard, ProductsWrapper}