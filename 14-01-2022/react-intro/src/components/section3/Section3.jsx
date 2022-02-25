import React from "react";
import H1WithP from "../H1WithP/H1WithP.jsx";
import Win from "../cmdWindow/Win.jsx";
import './section3.css';

const Section3 =()=>{
    return(
        <div className="container4">
            <H1WithP
             title = "Utilisable partout"
             para1 = "Comme nous ne présumons rien sur les autres technologies que vous utilisez, vous pouvez développer de nouvelles fonctionnalités avec React sans avoir à réécrire votre code existant."
             para2 = "React peut aussi être utilisé côté serveur avec Node, ou pour créer des applications mobiles grâce à React Native."
            />
            <Win/>
        </div>

    )
}

export default Section3