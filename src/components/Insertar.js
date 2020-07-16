import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import Slider from './Slider'
class Insertar extends Component {
    url=Global.url
    nombreRef=React.createRef();
    apellidoRef=React.createRef();
    cedulaRef=React.createRef();
    state={
        estudiante:{},
        status:null,
        selectedimage:null
    }
    saveEstudiante=(e)=>{
        e.preventDefault();
        this.changeState();
        axios.post(this.url+"guardar",this.state.estudiante).then((res=>{
            if(res.data){
                this.setState({
                    status:"success"
                })

            }
            else{
                this.setState({
                    status:"llorela"
                })
            }
        }))
        
    }
    
    changeState=()=>{
        this.setState({
            estudiante:{
                nombre:this.nombreRef.current.value,
                apellido:this.apellidoRef.current.value,
                cedula:this.cedulaRef.current.value
            }
        })
        console.log(this.state.estudiante)
    }
    render() {
        if(this.state.status==="exito"){
            return <Redirect to="/listarestuadiantes"></Redirect>
        }
        return (
            <React.Fragment>
            <Slider mensaje="Por favor ingrese sus datos"></Slider>
            <div className="center">
                
                <h1>Insertar estudiante</h1>
                <form onSubmit={this.saveEstudiante}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" ref={this.nombreRef} onChange={this.changeState} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido">apellido</label>
                        <input type="text" name="apellido" ref={this.apellidoRef} onChange={this.changeState} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cedula">cedula</label>
                        <input type="number" name="cedula" ref={this.cedulaRef}  onChange={this.changeState} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagen">imagen</label>
                        <input type="file" id="file" ref="file" name="file0"  />
                    </div>
                    <div className="clear-fix"></div>
                    <input type="submit" value="Guadar" className="btn btn-success" required />
                </form>
            </div>
            </React.Fragment>
        )
    }
}
export default Insertar