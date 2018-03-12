import { SET_CITY } from './../actions';

export const city = (state, action) => {
  // Evaluar si el type que está recibiendo es igual a SET_CITY, cambia mi estado por el de la ciudad que le hacemos click
  switch (action.type) {
    case SET_CITY:
    // Los tres puntitos se llaman Operador de Propagación
    // ...state --> copia el estado previo
      return {...state, city: action.value}
    default:
      return state;
  }
}