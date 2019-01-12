import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonStandard from './reset';
const Container = styled(ButtonStandard)`
  font-size: ${ ({ fsize }) => fsize ? fsize : '' };
  border-radius: ${ 
    ({ brCircle, br1, brStand }) => 
      brCircle ? "50%" :
      br1 ? ".4rem" : 
      brStand ? "999px" : null 
  };


  color: ${
    ({ outlined, textColor, bgColor }) =>
      outlined ? bgColor : 
      textColor ? textColor :
      null
  };
  background: ${
    ({ outlined, bgColor }) => 
      outlined ? 'transparent' : 
      bgColor ? bgColor :
      null
  };
  border: ${ ({ bd, bgColor }) => {
    if (bd === 0) {
      return 'none'
    } else {
      return `2px solid ${bgColor}`
    }
  }};


  width: ${
    ({ sm, width, fullWitdth }) => 
      sm ? '30px' :
      width ? width :
      fullWitdth ? "100%" :
      'auto'
  };
  height: ${
    ({ sm, height }) => 
      sm ? '30px' :
      height ? height :
      'auto'
  };
`

const IconButton = props => 
  <Container { ...props }>
    {props.children}
  </Container>

IconButton.propTypes = {
  sm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
  fsize: PropTypes.string,
  br: PropTypes.string,
  bd: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  brCircle: PropTypes.bool, 
  br1: PropTypes.bool, 
  bgColor: PropTypes.string,
  brStand: PropTypes.bool
}
export default IconButton;

