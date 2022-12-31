import { useState, useEffect } from "react";
import './Compras.css'

function salvarLista(lista) {
  try {
    localStorage.setItem("lista", JSON.stringify(lista));
  } catch (err) {
    console.warn("Sem permissão para uso de localStorage");
  }
}

function recuperarLista() {
  try {
    const lista = localStorage.getItem("lista");
    if (lista !== null) {
      return JSON.parse(lista);
    }
  } catch (err) {
    console.warn("Sem permissão para uso de localStorage");
  }

  return [];
}

function FormNovoItem({ adicionaItem }) {
  const [nome, setNome] = useState("");
  const [qtd, setQtd] = useState(1);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        adicionaItem(nome, qtd);

        setNome("");
        setQtd(1);
      }}
      action=""
      method="post"
      style={{
        borderTop: "1px solid #ccc",
        marginTop: "26px",
        paddingTop: "16px"
      }}
    >
      <fieldset style={{ maxWidth: "320px" }}>
        <h3 style={{ marginBottom: "21px" }}>Nuevo Item</h3>
        <div className="form-group">
          <label htmlFor="item">Descripcion del item</label>
          <input
            type="text"
            className="form-control"
            id="item"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qtd">Cantidad.</label>
          <input
            type="number"
            className="form-control"
            id="qtd"
            value={qtd}
            onChange={(event) => setQtd(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <span className="glyphicon glyphicon-plus"></span>
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}

function ListaItems({ lista = [], comprarItem, removerItem }) {
  return (
    <ul>
      {lista.length === 0 ? (
        <li className="empty">Items en el carrito</li>
      ) : (
        lista.map((item, index) => (
          <li className={item.comprado ? "riscado" : ""} key={item.nome}>
            <strong>{item.nome}</strong> - {item.qtd}
            <button
              className="btn btn-xs btn-success"
              style={{ margin: "0 6px" }}
              onClick={(event) => {
                event.preventDefault();
                comprarItem(index);
              }}
            >
              {item.comprado ? "Deshacer" : "Comprado"}
            </button>
            <button
              className="btn btn-xs btn-danger"
              onClick={(event) => {
                event.preventDefault();
                removerItem(index);
              }}
            >
              X
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

function Compras() {
  const [lista, setLista] = useState(recuperarLista());

  useEffect(() => {
    salvarLista(lista);
  }, [lista]);

  function adicionaItem(nome, qtd = 1) {
    setLista([...lista, { nome, qtd, comprado: false }]);
  }

  function comprarItem(index) {
    const novaListaAtualizada = lista.map((item, indexAtual) => {
      if (indexAtual === index) {
        item.comprado = item.comprado ? false : true;
      }
      return item;
    });
    setLista(novaListaAtualizada);
  }

  function removerItem(index) {
    const novaListaSemItem = lista.filter(
      (item, indexAtual) => index !== indexAtual
    );
    setLista(novaListaSemItem);
  }

  return (
    <div className="Compras">
      <div className="container">
        <h1>Compras a llevar</h1>
        <br />

        <ListaItems
          lista={lista}
          comprarItem={comprarItem}
          removerItem={removerItem}
        />
        <FormNovoItem adicionaItem={adicionaItem} />

        <form action="mailto:juanherrera.jshs@gmail.com" method="post" name="form1">
          <label for="nombre">Nombre: </label>
          <input id="nombre" name="nombre" type="text" />
          <label for="email">Email: </label>
          <input id="email" name="nombre" type="text" />
          ¿Qué te pareció la página?
          <textarea id="opinion" name="opinion"></textarea>
          <input name="Submit" type="submit" value="Enviar" />
        </form>

        <a href="mailto:juan_herrerasilva@hotmail.com">Deseo comprar {comprarItem}</a>
      </div>
    </div>
  );
}

export default Compras;
