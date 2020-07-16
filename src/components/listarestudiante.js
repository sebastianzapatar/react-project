import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
class listarestudiantes extends Component {
    url = Global.url
    componentWillMount() {
        //Llamamos obtener estudiantes
        this.getEstudiantes();
    }
    getEstudiantes = () => {
        //Vamos a usar el axios
        axios.get(this.url + "listarestudiante").then(res => {
            if (res) {
                this.setState({
                    estudiantes: res.data.estudiantes
                })
            }
            console.log(this.state.estudiantes)
        })
    }
    state = {
        estudiantes: [],
        status: null
    }
    render() {
        if (this.state.estudiantes.length >= 1) {
            var estudiantes2 = this.state.estudiantes.map((estudiante => {
                return (
                    <div className="center" id="articles">
                        <section id="content">
                            
                            <article className="article-item" id="article-template">
                                <div className="image-wrap">
                                    {estudiante.image !==null ?
                                        (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlFwrRhIzb4o5BbGSJzh2UAcZXRMMfi6omIg&usqp=CAU" alt={estudiante.cedula}/>):
                                        ( <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlFwrRhIzb4o5BbGSJzh2UAcZXRMMfi6omIg&usqp=CAU" alt="Meme" />)
                                    }
                                   
                                </div>
                                    <h2>{estudiante.nombre} {estudiante.apellido}</h2>
                                        <span className="date">{estudiante.date}</span>
                                <a href="#">Leer más</a>
                            </article>
                            
            </section>

                    </div>
                )
            }))
            return (
                <React.Fragment>
                    <h1>Lista de estudiantes</h1>
                    {estudiantes2}
                </React.Fragment>

            )
        }
        else {
            return (
                <h1>No hay inscritos :( :( </h1>
            )
        }
        //Acá no se hacen peticiones al servidor

    }
}
export default listarestudiantes 