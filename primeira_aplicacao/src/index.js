import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lista = [
  {
    id: 1,
    nome: "Golden Retriever",
    imagemUrl:
      "https://f.i.uol.com.br/fotografia/2017/10/27/150912457859f369e28eaa5_1509124578_3x2_md.jpg",
  },
  {
    id: 2,
    nome: "Labrador",
    imagemUrl:
      "https://www.clubeparacachorros.com.br/wp-content/uploads/2014/07/labrador-amarelo.jpg",
  },
];

function Item() {
  const item = lista[0];

  return <div>{item.nome}</div>;
}

function Lista() {
  return (
    <div>
      <Item />
      <Item />
    </div>
  );
}

function App() {
  return (
    <div>
      <Lista />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
