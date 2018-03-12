// Crear el único componente que va a tener manejo del estado
import React, { Component } from 'react';
// Connect conecta la app a los estados
import { connect } from 'react-redux';
import { setCity } from './../actions';
// Sólo los componentes puros no llevan llaves
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
  handleSelectionLocation = (city) => {
    this.props.setCity(city);
  }
  render() {
    return (
      <div>
        <LocationList cities = { this.props.cities } onSelectedLocation = {this.handleSelectionLocation}>
        </LocationList>
      </div>
    )
  }
}

// esta función nos deja trabajar con las acciones
const mapDispatchToṔropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToṔropsActions)(LocationListContainer);

export default AppConnected;