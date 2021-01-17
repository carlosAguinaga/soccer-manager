import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Juan Carlitos",
      foto:
        "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg",
    },
    {
      id: 2,
      nombre: "Beto Quiroga",
      foto:
        "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg",
    },
    {
      id: 3,
      nombre: "Alejo Garcia",
      foto:
        "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg",
    },
    {
      id: 4,
      nombre: "Juan Disain",
      foto:
        "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg",
    },
    {
      id: 5,
      nombre: "Alvaro Felipe",
      foto:
        "https://i1.wp.com/alvarofelipe.com/wp-content/uploads/2020/08/alvaro.png?fit=1080%2C1080&ssl=1",
    },
    {
      id: 6,
      nombre: "Alexys Lozada",
      foto:
        "https://pbs.twimg.com/profile_images/1103454462784520193/c6FT4noY_400x400.jpg",
    },
    {
      id: 7,
      nombre: "Harold Pajuelo",
      foto:
        "https://edteam-media.s3.amazonaws.com/users/avatar/d28d3e47-357c-4b80-bd4f-8ae6584c1ae1.jpg",
    },
    {
      id: 8,
      nombre: "Manu Rodriguez",
      foto:
        "https://edteam-media.s3.amazonaws.com/users/avatar/f3d219b9-6756-48ca-8694-f5a339b4e0af.jpeg",
    },
    {
      id: 9,
      nombre: "AlejoRodríguez",
      foto:
        "https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2020/12/02124431/Gareth.Bale-1.jpg",
    },
    {
      id: 10,
      nombre: "Andrés Muquinche",
      foto:
        "https://api.ed.team/files/avatars/33f02168-6547-4520-bada-6302388d5880.jpg",
    },
    {
      id: 11,
      nombre: "Ricardo Otero",
      foto:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 12,
      nombre: "Deivis Rivera",
      foto:
        "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 13,
      nombre: "Percy Tuncar",
      foto:
        "https://api.ed.team/files/avatars/b0801e8a-8bf0-442f-b2ef-0ddaf6ee7aef.png",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
