import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Coin";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path=":coinId">
                    <Coins />
                </Route>
                <Route path="/">
                    <Coins />
                </Route>
            </Routes>
        </BrowserRouter>);
}
export default Router;