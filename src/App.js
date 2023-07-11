import { Routes, Route } from "react-router";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return(
    /* Routes allows this application to register these Route level components that will then in turn render a specific component when it matches 
       the specific route that you're looking for */ 
    <Routes>
      <Route path='/' element={ <Navigation /> } >
        <Route index element={ <Home /> } />
        <Route path='shop/*' element={ <Shop /> } />
        <Route path='auth' element={ <Authentication /> } />
        <Route path='checkout' element={ <Checkout /> } />
      </Route>
    </Routes>
  )
}

export default App;
