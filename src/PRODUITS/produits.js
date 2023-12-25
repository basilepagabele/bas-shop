import axios from "axios"
import {Component,} from "react"
import { Link } from "react-router-dom"
export default class Produits extends Component{
    constructor(props){
        super(props)
        this.state={
        a:[] 
        }
    }

componentDidMount(){
    axios.get("https://fakestoreapi.com/products/")
    .then((bas)=>{this.setState({a:bas.data})})
}


    render(){
return(
    this.state.a.map(function(ap){
        return(
            <div >
                <ul  className="row bg-danger text-lightn" style={{border:"1px dashed blue",fontSize:"22px", fontFamily:"Arial, Helvetica, sans-serif"}}>

               
            <li className="col-sm-3"> id : {ap.id}</li>
            <li className="col-sm-6">title : {ap.title}</li>
             
             
            <Link to={'/production/'+ap.id}  className="col-sm-3" >plus d'infos</Link>
            </ul>
        </div>
        )
    })
    
)
    }
}