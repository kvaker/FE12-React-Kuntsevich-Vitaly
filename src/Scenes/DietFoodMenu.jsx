import React, {useContext, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import Dropdownbutton from "../Assets/img/caret-down-solid.svg";
import Table from "../Components/Table";
import FoodCard from "../Components/DietFoodmenu/FoodCard";
import { getFoodByName } from "/src/api/dietInstance";
import { newFoodAdd } from "../Store/actions/foodActions";
import { Form, Formik } from "formik";
import Checkboxes from "../Components/FormikInputs/Checkboxes"
import {ThemeContext} from "../HOC/GlobalThemeProvider";
import {foodSelector} from "../Store/selectors/foodSelector";


const StyledDietFoodMenu = styled.div`
background-color: ${props => props.children === 1 ? "dark" : props.theme.BackgroundColor};

.DietFoodChart {
   margin-left: 360px;
   display: flex;
   flex-direction: row;
   }
   .Chart-Bar{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-right: 60px;
   }
   .Bar-Header {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   justify-items: center;
   }
   .Bar-Title {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   justify-items: center;
   }
   .Bar-Title-info {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   justify-items: center;
   padding-top: 25px;
   margin-right: 690px;
   }
   .dropdown-area {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100px;
    height: 45px;
    background: #ffffff;
    border: #F2EFF5 solid 2px;
    margin-top: 16px;
    border-radius: 16px;
    }
    .dropdown-area: cursor {
    width: 400px;
    height: 45px;
    background: #ffffff;
    }
    .dropdown-button{
    width: 10px;
    height: 10px;
    color: #86878B;
    text-align: center;
    margin: 8px;
    padding: 6px 4px;
    transition: 0.5s;
    cursor: pointer;
    }
    .dropdown-choice {
    font-size: 14px;
    padding: 15px 7px;
    color: #86878B;
    }
   .DietFood-Bar{
   width: 1100px;
   height: 900px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .DietFood-info{
    width: 18px;
    height: 18px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    margin-top: 13px;
    }
    .DietFood-info_background{
    width: 45px;
    height: 45px;
    background: orange;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    margin: 20px 30px 30px;
    }
   .Current-Diet-Bar{
   width: 330px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .Trending-Ingredients{
   width: 330px;
   height: 600px;
   background: #ffffff;
   border-radius: 8px;
   }
`

const DietFoodMenu = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [pageNumber, setpageNumber] = useState(null);
    const setIsThemeDark = useContext(ThemeContext);
    const foodsPerPage = 15;
    const pagesVisited = pageNumber * foodsPerPage;
    const foodList = useSelector(foodSelector);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const tableCells = [
        {name: "column1", key: "dietLabels", width:20, handleSort: (a,b) => +a > +b ? 1 : -1},
        {name: "column2", key: "healtLabels", width:20},
        {name: "column3", key: "totalNutrients", width:60}
    ]
    const tableData = [
        {dietLabels: 'dietLabels', healtLabels:'', totalNutrients: ''},
        {dietLabels: 'dietLabels', healtLabels:'', totalNutrients: ''},
        {dietLabels: 'dietLabels', healtLabels:'', totalNutrients: ''},
        {dietLabels: 'dietLabels', healtLabels:'', totalNutrients: ''},
        {dietLabels: 'dietLabels', healtLabels:'', totalNutrients: ''},
        {dietLabels: 'dietLabels', healtLabels:'', totalNutrients: ''},
        {c1: '7', c2:'big Cell'},
        {c1: '8', c2:'big Cell'},
        {c1: '9', c2:'big Cell'},
        {c1: '10', c2:'big Cell'},
    ]

    return (
        <StyledDietFoodMenu>
            {props.children}
            <section className={"CChart"}>
                <div className={"Chart-Bar"}>
                    <div className={"Running-Bar"}>
                        <div className={"Bar-Header"}>
                            <div className={"Bar-Title"}>
                                <div className={"running-info_background"}>
                                <div className={"Bar-Title-info"}>
                                    <h2>Diet Food Menu</h2>
                                    <p>Your progress in this year</p>
                                </div>
                                <div className={"dropdown-area"} onChange={props.children}>
                                    <p className={"dropdown-choice"}>Monyhly</p>
                                    <div className={"dropdown-button"} onClick={props.children}>
                                        <Dropdownbutton/>
                                    </div>
                            </div>
                        </div>
                        </div>
                    <div className={"Current-Diet-Bar"}>
                        <Formik
                            initialValues={{
                                picked: '',
                            }}
                            onSubmit={(values) =>
                                getFoodByName(values.picked)
                                    .then((data) => {
                                        dispatch(newFoodAdd(data));
                                        history.push({ pathname: location.pathname, search: "?" +
                                                new URLSearchParams(`hits=${values.picked}`) });
                                    })
                            }
                        >
                            {({ values }) => (
                                <Form className="food-filter_form">
                                    <div className="food-filter">
                                        <p className="food-filter_p">
                                            Food
                                        </p>
                                        <div>
                                            <Checkboxes name="picked" value="recipe/chicken/" />
                                            <label htmlFor="classic">recipe</label>
                                        </div>
                                        <div>
                                            <Checkboxes name="picked" value="ingredients" />
                                            <label htmlFor="classic">ingredients</label>
                                        </div>
                                    </div>

                                    <button type="submit" className="food-filter_btn">Search</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className={"Trending-Ingredients"}>
                        <div className="foodcard-container">
                            {foodList
                                .slice(pagesVisited, pagesVisited + foodsPerPage)
                                .map((food) => {
                                    const chicken = food.recipe_name.join(", ");
                                    const covers = () => {
                                        let result = food.recipe === undefined ? '1' : food.recipe[0];
                                        return result;
                                    }
                                    return (
                                        <FoodCard key={index} title={food.title} recipe={recipe}
                                dietLabels={dietLabels} healtLabels={healtLabels} totalNutrients={totalNutrients}
                                                  cover={covers} all={food}/>
                                    );
                                })
                            }
                        </div>
                        <Table cells={tableCells} data={tableData}/>
                    </div>
                </div>
                </div>
                </div>
            </section>
            {foodList.length !== 0 &&
            <ReactPaginate
                previousLabel="< "
                nextLabel=" >"
                pageCount={Math.ceil(100 / foodsPerPage)}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                pageClassName={"paginationAll"}
            />
            }

        </StyledDietFoodMenu>
    )
}
export default DietFoodMenu