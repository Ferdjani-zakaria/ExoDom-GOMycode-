import {Component} from 'react';
import './MessageBox.css'

class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:'',
            finalmsg: ''
        };
    }
    change = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    send = (e) => {
        e.preventDefault();
        // this.setState({
            // finalmsg: this.state.message
        // });
        this.props.handleMessage(this.state.message)
    }


    render() { 
        return ( 
            <form className='messageBox-container' onSubmit={this.send}>
                <h1 className='userName'> {this.props.name} </h1>
                <input type="text" className='messageInput' placeholder='Ecrire un message' onChange={this.change}/>
                <input type='submit' className='messageBtn' value="send"></input>
                <h2 className='messageStart'>Message</h2>
                <p>{this.state.finalmsg}</p>
            </form>
         );
    }
}
 
export default MessageBox