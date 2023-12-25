import { Routes , Route ,Link, Switch} from "react-router-dom";
import Accueil from "./accueil";
import Contact from "./contact";
import About from "./About";
import Produit from "./produit";
import Produits from "./produits";
import { Component } from "react";
import Rechercher from "./rechercher";
// import PaymentPage from "./Paiement";
import CartPage from "./panier";
import { CartProvider } from './CartContext';

export default class NAV extends Component {

    render(){
        return(
            <div className="row bg-success text-light ">
 {/* <Link to={'/accueil'} className="col bg-dark text-primary">VEUILLEZ ACCEDER A LA PAGE D'ACCUEIL SVP</Link>  */}
{/* <Link to={'/contact'} className="col bg-dark text-primary">CONTACT</Link>
<Link to={'/about'} className="col bg-dark text-primary">ABOUT</Link>
<Link to={'/recher'} className="col bg-dark text-primary">Rechercher</Link> */} 
                <div>
                <CartProvider>
<Routes>

<Route path={"/contact"}  element={<Contact />}></Route>

    <Route path={"/about"}  element={<About />}></Route>
    <Route path={"/card"}  element={<CartPage />}></Route>
    {/* <Route path={"/paiement"}  element={<PaymentPage />}></Route> */}
    
    <Route path={"/"}  element={<Accueil />}></Route>
    <Route path={"/recher"}  element={<Rechercher />}></Route>

    <Route path={"/products"}  element={<Produits />}></Route>
 
    <Route path={"/production/:id"}  element={<Produit />}></Route>
   
</Routes>
</CartProvider>
                </div>
            </div>
        )
    }
}








