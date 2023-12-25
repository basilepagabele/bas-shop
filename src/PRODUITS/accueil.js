import { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Navbar, Nav } from 'react-bootstrap';


export default class Accueil extends Component{

    render(){
        return(<div>

            <header><h1  style={{ marginRight:"-1130px", marginTop:"10px"}}><img  src="bas.jpg" style={{width:"120px" , height:"120px" , borderRadius:"50%"}} />
                 BASILO
                 <h1 style={{marginLeft:"120px", marginTop:"-50px"}}>PRODUCT</h1> </h1></header>

                <Link to="https://www.facebook.com/basile.pagabelem.3?mibextid=ZbWKwL"  target="_blank" rel="noopener noreferrer"> <img src="face.jpg" style={{width:"50px" , height:"50px" , borderRadius:"50%", marginLeft:"1170px",marginTop:"-200px"}} /></Link>
                <Link to={"https://www.youtube.com/@basilepagabelem76"}  target="_blank" rel="noopener noreferrer"> <img src="youtube.jpg" style={{width:"50px" , height:"50px" , borderRadius:"50%",marginTop:"-200px" }} /></Link>
                <Link to={"https://www.linkedin.com/in/basile-pagabelem-a94b37274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}  target="_blank" rel="noopener noreferrer"> <img src="link.jpg" style={{width:"50px" , height:"50px" , borderRadius:"50%", marginLeft:"1110px", marginTop:"-250px"}} /></Link>

             <div className="basi">

<div className="btn-group">
      <button type="button" className="btn btn-danger">MENU DEROULANT</button>
      <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="caret"></span>
        <span className="sr-only"></span>
      </button>
      <ul className="dropdown-menu">
        {/* Utilisez Link au lieu de <a> pour les liens internes */}
        <li className="dropdown-item"><Link to="/accueil" target="_blank">ACCUEIL</Link></li>
        <li className="dropdown-item"><Link to="/contact" target="_blank">CONTACTS</Link></li>

        <li role="separator" className="divider"></li>
        <li className="dropdown-item"><Link to="/recher" target="_blank">Rechercher</Link></li>
        <li className="dropdown-item"><Link to="/about" target="_blank">ABOUT</Link></li>
        <li className="dropdown-item"><Link to="/products" target="_blank">Visualiser les produits</Link></li>
        
      </ul>
    </div>
        <h1 style={{color:"black" , textAlign:"center", marginTop:"100px" ,  fontFamily:"bold" , fontSize:"30px"}}>BIENVENUE SUR CE SITE DE VENTE ET BON VISIONNAGE !!!</h1> 
         <img  src="pexels-photo-6207767.jpeg" style={{width:"100%" , height:"100%"}} /> 
        

</div>
<header><h1 style={{color:"red" , textAlign:"center", marginTop:"-600px" ,  fontFamily:"bold" , fontSize:"100px"}}>BASILO ELECTRONIC SHOP</h1></header>
        </div>)
    }
}


