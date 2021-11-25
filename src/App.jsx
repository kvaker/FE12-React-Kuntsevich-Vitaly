import React from "react";
import { BrowserRouter } from 'react-router-dom'
import CardHolder from "./Components/CardHolder/CardHolder";
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import RoutRouter from "./Routing/Rout";
import MainLayout from "./Layouts/MainLayout";
import GlobalStoreProvider from "./HOC/GlobalStoreProvider";
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import './styles/style.css'
import {store} from "./Store/initStore";

const App = (props) => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <GlobalThemeProvider store={store}>
                    <GlobalStoreProvider>
                        <GlobalModalProvider>
                            <BrowserRouter>
                                <MainLayout>
                                    <RoutRouter/>
                                </MainLayout>
                            </BrowserRouter>
                        </GlobalModalProvider>
                    </GlobalStoreProvider>
                </GlobalThemeProvider>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;