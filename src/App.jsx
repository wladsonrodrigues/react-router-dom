import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./Routes/Navigation";
import { AppRoutes } from "./Routes/AppRoutes";

export function App(){
    return (
        <>

            <Router>
                <Navigation />
                <AppRoutes />
            </Router>
        
        </>
    )
}