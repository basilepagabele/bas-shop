// import { Component, createRef } from "react";
// import axios from "axios"

import { useEffect, useRef, useState } from "react";

// export default class Rechercher extends Component{
//     constructor(props){
//         super(props)
//   this.t=createRef()
//         this.state={
//             p:[]  ,
//             text:"" ,
//         }
//     }

//     componentDidMount(){
//         axios.get("https://fakestoreapi.com/products/")
//         .then((bas)=>{this.setState({p:bas.data})})
//     }

//     Afficher(){
//         var h=this.t.current.value
//         this.setState({
//            text:this.state.p.filter(function(ap){
//             return ap.category==h
//         }).map(function(u){
//         return(
            
//             <div>
//             <p>id : {u.id}</p>
//             <p>title : {u.title}</p>
//             <p> le prix : {u.price}</p>
//             <p> la description : {u.description}</p>
//             <p> rate: {u.rating.rate}</p>
//             <p>count : {u.rating.count}</p>
//             <p>{u.category}</p>
//           <img  src={u.image} style={{width:"100px", height:"200px"}} />
        
       
//         </div>
//         )
//         })
//         })
//     }

   

//     render(){
       
//         return(
// <div>
// Category : <input type="text" ref={this.t} />
//         <button onClick={this.Afficher}>AFFICHAGE</button>
//         <h1>{this.state.text}</h1>
// </div>
//         )
//     }
// }

import { Link } from "react-router-dom";
export default function Rechercher(){
    
    const b=useRef()
    const[aff, setA]=useState([])
    const[text , setT]=useState('')

    useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then((data)=>{return data.json()})
    .then((data)=>{setA(data)})
    },[])

    function Ajouter(){

    }

    function Cher(){
var l=b.current.value
        setT( aff.filter(function(p){
            return p.category==l
        }).map(function(ap){
            return(
                <div>
                <ul className="row bg-danger">
                    <li className="col">id : {ap.id}</li>
        <li className="col">title : {ap.title}</li>
        <li className="col"> le prix : {ap.price}</li>
        <li className="col-6"> la description : {ap.description}</li>
        <li className="col"> rate: {ap.rating.rate}</li>
        <li className="col">count : {ap.rating.count}</li>
        <li className="col">{ap.category}</li>
      <img  className="col" src={ap.image} style={{width:"100px", height:"200px"}} />
                </ul>
<button onClick={Ajouter}>Ajouter dans le panier</button>
                </div>
            )
        }))
    }

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
    </div><br/><br/>

            <input type="text" ref={b} placeholder="categorie" /><br /><br />
            <button onClick={Cher} className="btn btn-primary">chercher</button>
            <p>{text}</p>
        </div>
    )
}

