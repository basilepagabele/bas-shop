
// import { useState} from "react"
// import { useParams } from "react-router-dom"
// import { useEffect } from "react"


// export default function Produit(){
// const[aff, setA]=useState({})
// const {id}=useParams()

//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products/'+id)
//         .then((data)=>{return data.json()})
//         .then((data)=>{setA(data)})
//         },[id])

//         return(
           
//                   <div key={aff.id}>
//                      <p>id : {aff.id}</p>
//             <p>title : {aff.title}</p>
//             <p> le prix : {aff.price}</p>
//             <p> la description : {aff.description}</p>
//             {/* <p> rate: {aff.rating}</p>
//             <p>count : {aff.rating}</p> */}
//             <p>{aff.category}</p>
//           <img  src={aff.image} style={{width:"100px", height:"200px"}} />
//                   </div>  
                
            
            
//         )
// }




// import { useState} from "react"
// import { useParams } from "react-router-dom"
// import { useEffect } from "react"


// export default function Produit(){
// const[aff, setA]=useState([])
// const {id}=useParams()

//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products/'+id)
//         .then((data)=>{return data.json()})
//         .then((data)=>{setA([data])})
//         },[id])

//         return(
//            aff.map(function(ap){
//             return(
//                 <div>
//                 {aff.map((ap) => (
//                   <div key={ap.id}>
//                     <p>id : {ap.id}</p>
//                     <p>title : {ap.title}</p>
//                     <p>le prix : {ap.price}</p>
//                     <p>la description : {ap.description}</p>
//                     <p>rate: {ap.rating?.rate}</p>
//                     <p>count : {ap.rating?.count}</p>
          
//                     <p>{ap.category}</p>
//                     <img src={ap.image} style={{ width: "100px", height: "200px" }} alt={ap.title} />
//                   </div>
//                 ))}
//               </div>
//             )
//            }) 
//         )
// }





import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Produit() {
  const [aff, setA] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then((data) => data.json())
      .then((data) => setA([data]))
      .catch((error) => console.error('Erreur de requête Fetch:', error));
  }, []);

  return (
    aff.map(function(ap){
      return(
        <div className="row">
        <div className="col-sm">
        <h1>id : {ap.id}</h1>
        <h1>title : {ap.title}</h1>
        <h1>le prix : {ap.price}</h1>
        </div>

        <div className="col-sm">
        <h1>la description : {ap.description}</h1>
        <h1>rate: {ap.rating?.rate}</h1>
        <h1>count : {ap.rating?.count}</h1>

        <h1>rate: {ap.rating && ap.rating.rate}</h1>
<h1>count : {ap.rating && ap.rating.count}</h1>
</div>
<div className="col-sm">
        <h1>{ap.category}</h1>
        <img src={ap.image} style={{ width: "300px", height: "400px" }} alt={ap.title} />
      </div>
      </div>
      )
    })
       
     
  );
}
