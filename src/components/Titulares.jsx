import React from 'react';
import { connect } from 'react-redux';
// import cancha from './cancha.svg';

const Titulares = ( { titulares, quitarTitular } ) => (
  <section>
    <h2>Titulares</h2>
      <div className="cancha">
        {
          titulares.map(j => (
            <article className="titular" key={j.id}>
              <div>
                <img src={j.foto} alt={j.nombre}/>
                <button onClick={ () => quitarTitular(j) }>X</button>
              </div>
              <p>{j.nombre}</p>
            </article>
          ))
        }
        <img src={process.env.PUBLIC_URL + "cancha.svg"} alt="Cancha de futbol"/>
      </div>
  </section>
)


const mapStateToProps = (state) => ({
  titulares: state.titulares
});

const mapDispachToProps = dispach => ({
  quitarTitular(jugador) {
    dispach({
      type: "QUITAR_TITULAR",
      jugador
    })
  }
});

export default connect( mapStateToProps, mapDispachToProps )(Titulares);
