import React from "react";
import './section2.css'
import H1WithP from '../H1WithP/H1WithP.jsx'

const Section2 =()=>{
    return(
    <div className="container1">
        <H1WithP
        title = "Déclaratif"
        para1 = "Grâce à React, il est facile de créer des interfaces utilisateurs interactives. Définissez des vues simples pour chaque état de votre application, et lorsque vos données changeront, React mettra à jour, de façon optimale, juste les composants qui en auront besoin."
        para2 = "Des vues déclaratives rendent votre code plus prévisible et plus facile à déboguer."
        />
        <H1WithP
        title = "À base de composants"
        para1 = "Créez des composants autonomes qui maintiennent leur propre état, puis assemblez-les pour créer des interfaces utilisateurs complexes."
        para2 = "Dans la mesure où les composants sont écrits en JavaScript plutôt que sous la forme de gabarits, vous pouvez facilement utiliser des données complexes dans vos applications et garder l’état hors du DOM."
        />
        <H1WithP
        title = "Utilisable partout"
        para1 = "Comme nous ne présumons rien sur les autres technologies que vous utilisez, vous pouvez développer de nouvelles fonctionnalités avec React sans avoir à réécrire votre code existant."
        para2 = "React peut aussi être utilisé côté serveur avec Node, ou pour créer des applications mobiles grâce à React Native."
        />
    </div>
    )
}

export default Section2