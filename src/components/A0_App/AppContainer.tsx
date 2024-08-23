import {BrowserRouter, HashRouter} from "react-router-dom";
import {RootStore, store} from "../../store/rootStore";
import {createContext} from "react";
import {App} from "./App";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export const StoreContext = createContext<RootStore>({} as RootStore)

export const AppContainer = () => {
    return (
        <HashRouter>
            <StoreContext.Provider value={store}>
                <DndProvider backend={HTML5Backend}>
                    <App/>
                </DndProvider>
            </StoreContext.Provider>
        </HashRouter>
    )
}