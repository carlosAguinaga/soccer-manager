import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ( { suplentes, quitarSuplente } ) => (
  <section>
    <h2>Suplentes</h2>
      <div className="suplentes">
        {
          suplentes.map(j => (
            <article className="suplente" key={j.id}>
              <div>
                <img src={j.foto} alt={j.nombre}/>
                <button onClick={ ()=> quitarSuplente(j) }>X</button>
              </div>
              <p>{j.nombre}</p>
            </article>
          ))
        }
      </div>
  </section>
)


const mapStateToProps = (state) => ({
  suplentes: state.suplentes
});

const mapDispachToProps = dispach => ({
  quitarSuplente(jugador){
    dispach({
      type: "QUITAR_SUPLENTE",
      jugador
    })
  }
});

export default connect( mapStateToProps, mapDispachToProps )(Suplentes);
