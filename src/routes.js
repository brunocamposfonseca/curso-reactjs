import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./context/Favorites";
import Register from "./pages/Register";

function AppRoutes(){
    return(
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/w/:id" element={<Watch />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path="/reg" element={<Register />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes