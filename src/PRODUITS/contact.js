import { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component{

    render(){
        return( 
            <div className="footer">

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

  <h1 className="bg-primary text-light">pour tout renseignement veullez nous contacter </h1>

  <h1> <a href="https://wa.me/qr/P3TJ2EKMXOFEF1">  <img  src="wha.jpg"  style={{width:"50px" , height:"80px"}} /></a>  +212 627-802-602</h1>
  
  <h1>  <a href="27.139882,-13.199764"> <img  src="gm.jpg"  style={{width:"50px" , height:"80px"}} /> </a> bpagabelem76@gmail.com</h1>
  
  <h1>   <img  src="loca.jpg"  style={{width:"50px" , height:"80px"}} /> 5R36+HVQ Laâyoune</h1>
            </div>
      )
    }
}