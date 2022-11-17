import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/authentication/authentication.component";

const Shop = () => <h1>Shop</h1>;

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="auth" element={<SignIn />} />
         </Route>
      </Routes>
   );
};

export default App;
