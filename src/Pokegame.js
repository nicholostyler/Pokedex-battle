import React, { Component } from 'react';
import Pokedex from './Pokedex';

const NAME_API =
    'https://pokeapi.co/api/v2/pokemon/';
    
class Pokegame extends Component {    
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            hand1: [],
            hand2: []
        }

        this.buildHand();
    }

    render() {
        if (this.state.loading === false){
            let exp = this.determineWinner();
            
            return (
                <div className="Pokegame">
                    <Pokedex hand={this.state.hand1} winner={exp.sum > exp.sum2} exp={exp.sum}/>
                    <Pokedex hand={this.state.hand2} winner={exp.sum < exp.sum2} exp={exp.sum2}/>
                </div>
        )
        } else {
            return <h1>Loading...</h1>
        }
    }
    

    determineWinner() 
    {
        var sum = 0;
        var sum2 = 0;
        this.state.hand1.forEach(function(item){
            sum += item.base_experience;
        });

        this.state.hand2.forEach(function(item){
            sum2 += item.base_experience;
        });

        console.log("sum 1: " + sum);
        console.log("sum2: " + sum2);

        return({sum, sum2});
    }

    randomID(){
        let min = Math.ceil(1);
        let max = Math.floor(150);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    async fetchData() {
        let datas = [];

        for (let step = 0; step < 8; step++) {
            let id = this.randomID();
            let url = `${NAME_API}${id}`;

            let res = await fetch(url);
            let json = await res.json();
            datas.push(json);
        }
        return datas;
    }

    async buildHand() {
        let data = await this.fetchData();
        let data2 = await this.fetchData();

        let hand1 = [];
        let hand2 = [];

        for(let step = 0; step < data.length; step++) {
            let element = data[step];
            let exp = element.base_experience;
            let name = element.name;
            let type = element.types[0].type.name;
            hand1.push({id: element.id, base_experience: exp, name: name, type: type});
        }

        for(let step = 0; step < data2.length; step++) {
            let element = data2[step];
            let exp = element.base_experience;
            let name = element.name;
            let type = element.types[0].type.name;
            hand2.push({id: element.id, base_experience: exp, name: name, type: type});
        }
        this.setState({loading: false, hand1: hand1, hand2: hand2});
    }


}

export default Pokegame;