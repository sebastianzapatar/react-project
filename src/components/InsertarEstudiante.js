import React, {Component} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
import Global from './url';
class InsertarEstudiante extends Component{
    url=Global.url
    nombreRef=React.createRef();
    apellidoRef=React.createRef();
    cedulaRef=React.createRef();
    state={
        estudiante:{},
        status:null,
        selectedfile:null
    }
    filechange=(e)=>{
        this.setState={
            selectedfile:e.target.files[0],
        }

    }
    saveEstudiante=(e)=>{
        e.preventDefault();
        this.changeState();
        //Hacer petición http por post
        Axios.post(this.url+"guardar",this.state.estudiante).then(res=>{
            if(res.data){
                this.setState({
                    estudiante:res.data.message,
                    status:"wating"
                });
                if(this.state.selectedfile!==null){
                    //tener el id del estudiante
                    var estudianteid=this.estudiante._id
                    const formdata=new FormData();
                    formdata.append('file0',
                    this.state.selectedfile,
                    this.state.selectedfile.name);
                    Axios.post(this.url+'subir-imagenestudiante/'+estudianteid,formdata).then(res=>{
                        if(res.data){
                             
                            this.setState({
                                status:"success"
                            })
                        }
                        else{
                            this.setState({
                                status:"failed"
                            })
                            
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }
            }
            else{
                this.setState({
                    status:"falied"
                })
            }
        })
        
    }
    changeState=()=>{
        this.setState({
            estudiante:{
                nombre:this.nombreRef.current.value,
                apellido:this.apellidoRef.current.value,
                cedula:this.cedulaRef.current.value,
            }
        })
    }
    render(){
        if(this.state.status==="success"){
            return <Redirect to="/blog"></Redirect>
        }
        return(
            <div className="center">
                <h1>Insertar estudiante</h1>
                <form onSubmit={this.saveEstudiante}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" ref={this.nombreRef} onChange={this.changeState} required />
        </div>
        <div className="form-group">
            <label htmlFor="apellido">apellido</label>
            <input type="text" name="apellido" ref={this.apellidoRef}  onChange={this.changeState} required  />
        </div>
        <div className="form-group">
            <label htmlFor="cedula">cedula</label>
            <input type="number" name="cedula" ref={this.cedulaRef}  onChange={this.changeState} required />
        </div>
        <div className="form-group">
            <label htmlFor="imagen">imagen</label>
            <input type="file" id="file" ref="file" name="file0"  onChange={this.filechange}/>
        </div>
        <div className="clear-fix"></div>
        <input type="submit" value="Guadar" className="btn btn-success" required />
    </form>
            </div>
        )
    }
}
export default InsertarEstudiante
