import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Chris Hemsworth",
      foto:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg",
    },
    {
      id: 2,
      nombre: "Fifty Cent",
      foto:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/50_Cent_AKA_Curtis_Jackson_%28cropped%29.jpg/220px-50_Cent_AKA_Curtis_Jackson_%28cropped%29.jpg",
    },
    {
      id: 3,
      nombre: "Pink",
      foto: "https://static3.abc.es/Media/201309/17/Pink--644x562.jpg",
    },
    {
      id: 4,
      nombre: "Eddie Murphy",
      foto:
        "https://i.pinimg.com/564x/eb/c8/c2/ebc8c20d2630618ce26d317ce10a656e.jpg",
    },
    {
      id: 5,
      nombre: "Gael García",
      foto:
        "https://resize-media.festival-cannes.com/fit-in/384x485/film_film/0001/66/9beedb60df334b5e74d08fbc01b1a53f2fdc847a.jpeg",
    },
    {
      id: 6,
      nombre: "Jared Leto",
      foto:
        "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/personajes/jared-leto/7251597-8-esl-ES/jared-leto.jpg",
    },
    {
      id: 7,
      nombre: "Kanye West",
      foto:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg",
    },
    {
      id: 8,
      nombre: "kelly rowland",
      foto:
        "https://www.buenamusica.com/media/fotos/cantantes/biografia/kelly-rowland.jpg",
    },
    {
      id: 9,
      nombre: "Marc Anthony",
      foto:
        "https://havana-live.com/noticias/wp-content/uploads/2016/04/6608-Marc-Anthony.jpg",
    },
    {
      id: 10,
      nombre: "Ozuna",
      foto:
        "https://elcomercio.pe/resizer/9ltv-vi9yFD_iMr591kzMedCMh8=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/IGFYHC3JD5GLVCMPQK2MYFE3Q4.jpg",
    },
    {
      id: 11,
      nombre: "Don Cheadle",
      foto:
        "https://m.media-amazon.com/images/M/MV5BNDMxNDM3MzY5N15BMl5BanBnXkFtZTcwMjkzOTY4MQ@@._V1_UY317_CR17,0,214,317_AL_.jpg",
    },
    {
      id: 12,
      nombre: "Rihanna",
      foto:
        "https://www.infobae.com/new-resizer/doHGKNU-tDaPW2-sg85dfScQU7Y=/420x280/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/D752L7GDWNBFFNJYLHL7JWFDYA.jpg",
    },
    {
      id: 13,
      nombre: "Woody Harrelson",
      foto:
        "https://www.alohacriticon.com/wp-content/uploads/2005/04/woody-harrelson-foto-biografia.jpg",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
 
  switch (action.type) {
    case "AGREGAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case "AGREGAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case "QUITAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador),
      };
    case "QUITAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador),
      };
    default:
      return state;
  }
};

export default createStore(reducerEntrenador);
