import React, { Component } from 'react'
class Slider extends Component {
    contador=0;
    state={
        contador:0
    };  
    sumar=()=>{
        this.setState({
            contador:(this.state.contador + 1)
        })
    }
    restar=()=>{
        this.setState({
            contador:(this.state.contador - 1)
        })
    }
    render() {
        
        return (
            
            <React.Fragment>
                <div id="slider" className="slider">
                <h2>{this.props.mensaje} </h2>
                <button type="button" className="btn btn-dark" onClick={this.sumar}>Suma</button>
                    <button type="button" className="btn btn-dark"onClick={this.restar}>restar</button>
                </div>
                <h1>
                    {this.state.contador}
                </h1>
            
        
            </React.Fragment>
        )
    }
}
export default Slider