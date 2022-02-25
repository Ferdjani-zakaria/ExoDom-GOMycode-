import React from "react";
import './Win.css'


const Win =()=>{
    return(  
    <div className="container3">
        <div className="win-left">            
            <div className="top-win-left">
                <div><h6>ÉDITEUR JSX INTERACTIF</h6></div>
                <div> <input type="checkbox" /> <label htmlFor="">JSX ?</label> </div>
            </div>
            <div className="down-win-left"><p>{`class HelloMessage extends React.Component {
                render() {
                    return (
                    <div>
                        Salut {this.props.name}
                    </div>
                    );
                }
                }

                ReactDOM.render(
                <HelloMessage name="Thierry" />,
                document.getElementById('hello-example')
                );`}</p>
            </div>
        </div>
        <div className="win-right">            
            <div className="top-win-right"><h6>RÉSULTAT</h6></div>
            <div className="down-win-right"><p>Salut Thierry</p></div>
        </div>
    </div>
)
}
 
export default Win