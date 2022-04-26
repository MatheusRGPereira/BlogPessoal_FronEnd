import React from "react";
import './Home.css';


function Home(){
    return (
        <>
            <nav className="navegacao">
                <h3 className="titulo">Blog Pessoal</h3>
            <ul> 
               <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Postagens</a></li>
                <li><a href="index.html">Temas</a></li>
                <li><a href="index.html">CadastrarTema</a></li>
                <li><a href="index.html">Logout</a></li>
            </ul>
        </nav>
        <div className="apresentacao">
        <h1>Seja Bem vindo ao Blog Pessoal</h1>
        <h4 id="sub">Diga aqui oque voçê está pensando!!</h4>
        <nav className="navegacao">
                <ul className="margin">
                <li><a href="index.html">Nova Postagem</a></li>
                <li><a href="index.html">Ver Postagens</a></li>
                </ul>
        </nav>

        </div>
        <footer className="rodape">
              <p>Produzido por Matheus</p> 
               <p>Generation Brasil</p>
         </footer>
        </>
    );
}

export default Home;
