import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminRoutes from './routes/admin'
import { Provider } from "react-redux";
import store from "./redux/stores";
const App=()=>{
    return(
        <Provider store={store}>
        <Router>
    <Routes></Routes>
    
</Router>
  
        
        </Provider>

        );
    
    
};
export default App;