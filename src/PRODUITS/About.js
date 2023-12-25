import { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component{

    render(){
        return(
            <div> 



<div className="btn-group">
      <button type="button" className="btn btn-danger">MENU DEROULANT</button>
      <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="caret"></span>
        <span className="sr-only"></span>
      </button>
      <ul className="dropdown-menu">
        {/* Utilisez Link au lieu de <a> pour les liens internes */}
        <li className="dropdown-item"><Link to="/accueil">ACCUEIL</Link></li>
        <li className="dropdown-item"><Link to="/contact">CONTACTS</Link></li>

        <li role="separator" className="divider"></li>
        <li className="dropdown-item"><Link to="/recher">Rechercher</Link></li>
        <li className="dropdown-item"><Link to="/products" target="_blank">Visualiser les produits</Link></li>
        <li className="dropdown-item"><Link to="/about">ABOUT</Link></li>
      </ul>
    </div>

        <h1>Nous sommes une société de vente des produits electronique et bien plus d'autres
            pour un premier achat la livraison c'est gratuite et le paiement se fait
            lors de la livraison
        </h1></div>)
    }
}