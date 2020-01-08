import React, { Component } from 'react';
import './pokecard.css'; 


const POKE_API = 
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    constructor(props) {
        super(props);
    }
    render () {

        let imgSrc = `${POKE_API}${this.props.data.id}.png`;
        return (
        <div className="card">
            <h3>{this.props.data.name}</h3>
            <img src={imgSrc} alt={this.props.data.name}/>
            <p>type: {this.props.data.type}</p>
            <p>EXP: {this.props.data.base_experience}</p>
        </div>
        );
    }
}

export default Pokecard;