import React from "react";
import "./LogPage.css";
import appStoreImg from "../images/AppStore.png";
import googleStoreImg from "../images/GoogleStore.png";

import { Link } from 'react-router-dom';

function LogPage() {
  return (
    <>
    <section className="logPageContainer">
      <div className="disRow" style={{alignItems: "center", marginBottom: "10vh" , marginTop: "6vh"}}>
        <div className="disCol" style={{width: "100%"}}>
          <div className="logBox disCol">
            <div className="instaLogo">
              <h1 style={{margin: "0px auto 35px"}}>Instagram</h1>
            </div>
            <div className="disCol inputBox" style={{ gap: 20 }}>
              <div className="disCol" style={{ gap: 5 }}>
                <input
                  className="textInputBox"
                  type="text"
                  placeholder="Num. téléphone, nom d’utilisateur ou e-mail"
                />
                <input
                  className="textInputBox"
                  type="text"
                  placeholder="Mot de passe"
                />
              </div>
              <div className="disCol btnblue">
                <button type="submit" className="btnblue">
                  Connexion
                </button>
              </div>
            </div>
            <div className="disRow ouLine">
              <p className="niceLine"></p>
              <p>OU</p>
              <p className="niceLine"></p>
            </div>
            <div className="disCol">
              <a href="">Se connecter avec facebook</a>
              <a href="">mot de passe oublié ?</a>
            </div>
          </div>
          <div className="logBox createAccountBox disRow">
            <p>Vous n'avez pas de compte ? </p>
            {/* <a href="../pages/createAccountPage.jsx">Inscrivez-vous</a> */}
            <Link to={'./createAccountPage.jsx'}>Inscrivez-vous</Link>
          </div>
          <div className="disCol">
            <div>
              <p>Téléchargez l’application.</p>
            </div>
            <div className="disRow">
              <a href="" className="logPageStore">
                <img src={appStoreImg} alt="apple" />
              </a>
              <a href="" className="logPageStore">
                <img src={googleStoreImg} alt="googleplay" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="disCol">
        <div className="disRow">
          <div>
            <a href="">Meta</a>
          </div>
          <div>
            <a href="">À propos</a>
          </div>
          <div>
            <a href="">Blog</a>
          </div>
          <div>
            <a href="">Emplois</a>
          </div>
          <div>
            <a href="">Aide</a>
          </div>
          <div>
            <a href="">API</a>
          </div>
          <div>
            <a href="">Confidentialité</a>
          </div>
          <div>
            <a href="">Conditions</a>
          </div>
          <div>
            <a href="">Comptes principaux</a>
          </div>
          <div>
            <a href="">Hashtags</a>
          </div>
          <div>
            <a href="">Lieux</a>
          </div>
          <div>
            <a href="">Instagram Lite</a>
          </div>
        </div>
        <div className="disRow">
          <div>
            <p>Français</p>
          </div>
          <div>
            <p>© 2022 Instagram par Meta</p>
          </div>
        </div>
      </footer>
    </>
    
  );
}

export default LogPage;
