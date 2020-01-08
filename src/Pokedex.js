import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './pokedex.css';

class Pokedex extends Component { 
    render() {
        //console.log(this.props.hand);
        let title;
        if (this.props.winner)
            title = <h1 className="winner">Winner</h1>
        else 
            title = <h1 className="loser">Loser</h1>
        return(
        <div className="Pokedex">
            {title}
            <p>Total Experience: {this.props.exp}</p>
            <div className="hand">
            {this.props.hand.map((p) => (
                <Pokecard data={p}/>
            ))}
        </div>
        </div>
        
        )
        
    }
}

export default Pokedex;