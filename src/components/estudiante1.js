import React, { Component } from 'react'
import axios from 'axios'
import Global from './url'
import Moment from 'react-moment'
import 'moment/locale/es'
class estudiante1 extends Component {
    url=Global.url
    componentWillMount() {
        this.getEstudiantes();
    }
    getEstudiantes = () => {
        axios.get(this.url+"listarestudiante").then(res => {
            if (res) {
                this.setState({
                    estudiantes: res.data.estudiantes,
                    status: "success"
                })
            }
            console.log(this.state)
        });
    }
    state = {
        estudiantes: [],
        status: null
    }
    render() {
        if (this.state.estudiantes.length > 1) {
            var estudiantes2=this.state.estudiantes.map((estudiante)=>{
                
                return(<div>
                    <h2>{estudiante.nombre} {estudiante.apellido}</h2>
                    <Moment fromNow>{estudiante.date}</Moment>
                    
                    <h2></h2>
                    </div>)
            
            })
            
            return (

                <React.Fragment>
                    <h1>Lista de estudiantes</h1>

                    {estudiantes2}
                </React.Fragment>
            )
        }
        else if(this.state.status==="success"){
            return(
                <React.Fragment>
                    <h1>No hay estudiantes</h1>
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    <h1>Cargando</h1>
                    <h2>No se pudo hacer la petición</h2>
                </React.Fragment>
            )
        }

    }
}
export default estudiante1