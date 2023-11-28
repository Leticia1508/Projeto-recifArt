import React from "react";
import "./CardArtesoes.css";

const CardArtesoes = (props) => {
  return (
    <>
      <div className="card-artesoes">
        <div className="container-artesoes">
         <h2>{props.nome}</h2>
         <p>{props.descricao}</p>
        </div>
        <img src={props.img} alt="" />
      </div>
    </>
  );
};

export default CardArtesoes;