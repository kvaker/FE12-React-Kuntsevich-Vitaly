import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import LazyImage from "../LazyImage"

const StyledFoodCard = styled.div`
font-family: 'Montserrat';
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
width: 150px;
margin: 0 0 30px 30px;
  
.foodcard-cover {
  margin-bottom: 5px;
  /* background-image: url(${foodCover});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  display: flex;
  border-radius: 4px;
}
  .foodcard-cover_back {
    width: 120px;
    height: 200px;
    border-radius: 4px;
    
  }

  .foodcard-cover_img {
    width: 120px;
    height: 199px;
    object-fit: cover;
    border-radius: 4px;
    position: absolute;
    left: -121px;
    top: 0px;
    border: 1px solid black;
    z-index: 1;
  }

  .foodcard-name {
    overflow: hidden;
    max-height: 80px;
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
    background-color: #C89566;
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
                <img className="foodcard-cover_back" src={foodCover} />
                <LazyImage
                    className={"foodcard-cover_img"}
                    alt={"food-cover"}
                    src={`https://edamam-recipe-search.p.rapidapi.com/q/image/${props.cover()}-M.jpg`}
                />
            </div>
            <h4 className="foodcard-name">{props.title}</h4>
            <div className="foodcard-name">
                <p className="foodcard-name_p">
                    {props.recipe}
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