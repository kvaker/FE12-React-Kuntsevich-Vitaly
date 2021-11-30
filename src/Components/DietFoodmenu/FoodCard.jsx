import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import LazyImage from "../LazyImage"

const StyledFoodCard = styled.div`
font-family: 'Montserrat';
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
margin: 20px 0 15px 30px;
    width: 250px;
    padding: 4px;
    border: 1px solid #E6E6E6;
  
.foodcard-cover {
  margin-bottom: 5px;
  display: flex;
  border-radius: 4px;
}
  .foodcard-cover_back {
    width: 120px;
    height: 200px;
    border-radius: 4px;
    
  }

  .foodcard-cover_img {
    width: 200px;
    height: 199px;
    object-fit: cover;
    border-radius: 4px;
    left: -121px;
    top: 0px;
    border: 1px solid black;
    z-index: 1;
  }

  .foodcard-name {
    height: 25px;
  }

  .foodcard-name, .bookcard-name_p {
    font-size: 14px;
    margin: 0 0 5px 0;
    text-align: center;
  }

  .want-eat_btn {
    color: #F6F5F3;
    font-family: 'Montserrat';
    padding: 10px 15px;
    cursor: pointer;
    background-color: #0075FF;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
  }
`;

const FoodCard = (props) => {
    const history = useHistory();
    const moveToFood = (id) => {
        history.push((id))
    }
    return (
        <StyledFoodCard>
          <div className="foodcard-cover" >
          <LazyImage
          className={"foodcard-cover_img"}
            alt={"food-cover"}
           src={`${props.recipe.image}`}
           />
            </div>
            <h4 className="foodcard-name">{props.recipe.label}</h4>
           <div className="foodcard-name">
            <p className="foodcard-name_p">
            {props.recipe.healtLabels}
           </p>
               <p className="foodcard-name_p">
                   Calories:{props.recipe.calories}
               </p>
           </div>
            <button
                onClick={() => {
                    moveToFood(props.id);;
                }}
                className="want-eat_btn">
                Details
            </button>
        </StyledFoodCard >
    );
};

export default FoodCard;