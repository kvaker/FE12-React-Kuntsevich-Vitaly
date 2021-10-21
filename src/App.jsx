import React from "react";
import { BrowserRouter } from 'react-router-dom'
import CardHolder from "./Components/CardHolder/CardHolder";
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import RoutRouter from "./Routing/Rout";
import MainLayout from "./Layouts/MainLayout";
import GlobalStoreProvider from "./HOC/GlobalStoreProvider";

const App = (props) => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <GlobalStoreProvider>
                    <GlobalModalProvider>
                        <BrowserRouter>
                            <MainLayout>
                                <RoutRouter/>
                            </MainLayout>
                        </BrowserRouter>
                    </GlobalModalProvider>
                 </GlobalStoreProvider>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;