import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router";

const App = () => {
  return(
    /* Routes allows this application to register these Route level components that will then in turn render a specific component when it matches 
       the specific route that you're looking for */ 
    <Routes>
      <Route path='/' element={ <Home /> } />
    </Routes>
  )
}

export default App;
