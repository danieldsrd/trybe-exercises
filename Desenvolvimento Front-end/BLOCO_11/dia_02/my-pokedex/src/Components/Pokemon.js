import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div>             
        <span>{name}</span>
        <span>{type}</span><br></br>        
        <span>{averageWeight.value} {averageWeight.measurementUnit}</span>
        <div>
          <img src={image} alt="pokemon" />
        </div>        
      </div>
    )
  }
}

Pokemon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.number,
  }),
  image: PropTypes.string,
}

export default Pokemon;

