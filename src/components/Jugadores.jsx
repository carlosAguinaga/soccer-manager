import { connect } from "react-redux";



const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => {


  return (
    <section>
      <h2>Jugadores</h2>
      <div className="contenedor-jugadores">
          {jugadores.map((j) => (
            <article className="jugador" key={j.id}>
              <img src={j.foto} alt={j.nombre} />
              <h3>{j.nombre}</h3>
              <div>
                <button onClick={() => agregarTitular(j)}>Titular</button>
                <button onClick={() => agregarSuplente(j)}>Suplente</button>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  jugadores: state.jugadores,
});

const mapDispachToProps = (dispach) => ({
  agregarTitular(jugador) {
    dispach({
      type: "AGREGAR_TITULAR",
      jugador,
    });
  },
  agregarSuplente(jugador) {
    dispach({
      type: "AGREGAR_SUPLENTE",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispachToProps)(Jugadores);
