import { createStore } from 'redux';
import { city } from './../reducers/city';

// Creando un estado inicial
const initialState = {
  city: 'Santiago,cl'
}

/*
REDUCER: TOMA UN ESTADO ANTERIOR, LA FUNCIÓN (ACCIÓN) Y DEVUELVE UN ESTADO NUEVO
*/

// vinculando plugin redux devtools con nuestra aplicación
export const store = createStore(city, initialState,
 window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__());
