import React from 'react';
import { Provider } from 'react-redux'
import { persistor, store} from "../Store/initStore";
import { PersistGate } from "redux-persist/integration/react";

const GlobalStoreProvider = (props) => {
    return (
        <PersistGate persistor={persistor}>
        <Provider store={store}>
            {props.children}
        </Provider>
        </PersistGate>
    )
}

export default GlobalStoreProvider