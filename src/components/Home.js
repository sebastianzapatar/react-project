import React, {Component} from 'react'
import Slider from './Slider'
class Home extends Component{
    componentDidMount(){
        alert("Se cargo el componente")
    }
    componentWillMount(){
        alert("Se esta cargando")
    }
    componentWillUnmount(){
        alert("Se va el componente")
    }
    render(){
        return(
            <React.Fragment>
                <Slider mensaje="Estamos en el home"></Slider>
            </React.Fragment>
        )
    }
}
export default Home