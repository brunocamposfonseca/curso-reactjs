import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/w/:id" element={<Watch />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes