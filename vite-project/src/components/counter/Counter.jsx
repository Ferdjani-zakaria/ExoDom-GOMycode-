import {Component} from "react";
import PropTypes from 'prop-types';
import './Counter.css'
import Card from '../card/card.jsx'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            counting : 0
        }
        
    }
    
     increase=()=> {
       this.setState({counting: this.state.counting + 1})
                    
       
    }  
        
     decrease=()=> {
        if(this.state.counting>0){
            this.setState ({counting: this.state.counting -1})
        }
    }
    


    render() { 
        return (
            <div>
                <h1>{this.state.counting}</h1>
                <button className="btn" onClick={this.decrease }>Remove</button>
                <button className="btn" onClick={this.increase}>Add</button>
            </div>
        );
    }
}
 
export default Counter

