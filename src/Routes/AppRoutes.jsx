import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Product } from "../Pages/Product";
import { About } from "../Pages/About";
import { NotFound } from "../Pages/NotFound";

export function AppRoutes(){
    return (
        

            //Lista de rotas 
            <Routes>
                {/* Ao acessar a rota, carrega a página. */}
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about" element={<About />} />
                {/* Ao acessar a rota errada, carrega o error 404 não encontrado */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        
    
    );
}