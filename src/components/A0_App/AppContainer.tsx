import {BrowserRouter, HashRouter} from "react-router-dom";
import {RootStore, store} from "../../store/rootStore";
import {createContext} from "react";
import {App} from "./App";
import {DndProvider} from 'react-dnd-multi-backend'
import {HTML5toTouch} from 'rdndmb-html5-to-touch'
import {PreviewCustom} from "../A2_Menu/PreviewCustom/PreviewCustom";

export const StoreContext = createContext<RootStore>({} as RootStore)

export const AppContainer = () => {
    return (
        <HashRouter>
            <StoreContext.Provider value={store}>

                <DndProvider options={HTML5toTouch}>
                    <PreviewCustom/>
                    <App/>

                </DndProvider>

            </StoreContext.Provider>
        </HashRouter>
    )
}