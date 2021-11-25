import React, {useContext, useState} from "react";
import { useDispatch } from "react-redux";
import { Route } from "/src/Routing/Rout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {ThemeContext} from "../HOC/GlobalThemeProvider";

const StyledDistanceMap = styled.div`

`

const DistanceMap = (props) => {
    const dispatch = useDispatch();
    const setIsThemeDark = useContext(ThemeContext);

    return (
        <StyledDistanceMap>
            {props.children}
            <section className={"DistanceMap"}>
                <div className={"Running Distance"}></div>
            </section>
        </StyledDistanceMap>
    )
}
export default DistanceMap