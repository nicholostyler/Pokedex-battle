import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './pokedex.css';

class Pokedex extends Component { 
    render() {
        //console.log(this.props.hand);
        return(
        <div className="hand">
            {this.props.hand.map((p) => (
                <Pokecard data={p}/>
            ))}
        </div>
        )
        
    }
}

export default Pokedex;