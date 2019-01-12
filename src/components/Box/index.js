import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Container = styled.div`
  display: ${
    props => 
      props['block'] ? 'block' : 
      props['flex'] ? 'flex' 
      : 'inline-block'
  };
  align-items: ${
    ({ alignItem }) => 
      alignItem && alignItem === 'center' ? 'center' : 
      alignItem && alignItem === 'end' ? 'flex-end' 
      : 'flex-start'
  }
  justify-content: ${
    ({ justifyContent }) => 
      justifyContent && justifyContent === 'center' ? 'center' : 
      justifyContent && justifyContent === 'end' ? 'flex-end' :
      justifyContent && justifyContent === 'around' ? 'space-around' : 
      justifyContent && justifyContent === 'between' ? 'space-between' 
      : 'flex-start'
  }
  
  margin: ${ 
    ({ m }) => 
      m === 1 ? '.25rem' :
      m === 2 ? '.5rem' :
      m === 3 ? '.75rem' :
      m === 4 ? '1rem' 
      :null
  };
  margin-top: ${
    ({ mt }) => 
      mt === 1 ? '.25rem' :
      mt === 2 ? '.5rem' :
      mt === 3 ? '.75rem' :
      mt === 4 ? '1rem' 
      :null
  };
  margin-left: ${
    ({ ml }) => 
      ml === 1 ? '.25rem' :
      ml === 2 ? '.5rem' :
      ml === 3 ? '.75rem' :
      ml === 4 ? '1rem' 
      :null
  };
  margin-bottom: ${
    ({ mb }) => 
      mb === 1 ? '.25rem' :
      mb === 2 ? '.5rem' :
      mb === 3 ? '.75rem' :
      mb === 4 ? '1rem' 
      :null
  };
  margin-right: ${
    ({ mr }) => 
    mr === 1 ? '.25rem' :
    mr === 2 ? '.5rem' :
    mr === 3 ? '.75rem' :
    mr === 4 ? '1rem' 
    :null
  };
  padding: ${ 
    ({ p }) => 
      p === 1 ? '.25rem' :
      p === 2 ? '.5rem' :
      p === 3 ? '.75rem' :
      p === 4 ? '1rem' 
      :null
  };
  padding-top: ${
    ({ pt }) => 
      pt === 1 ? '.25rem' :
      pt === 2 ? '.5rem' :
      pt === 3 ? '.75rem' :
      pt === 4 ? '1rem' 
      :null
  };
  padding-left: ${
    ({ pl }) => 
      pl === 1 ? '.25rem' :
      pl === 2 ? '.5rem' :
      pl === 3 ? '.75rem' :
      pl === 4 ? '1rem' 
      :null
  };
  padding-bottom: ${
    ({ pb }) => 
      pb === 1 ? '.25rem' :
      pb === 2 ? '.5rem' :
      pb === 3 ? '.75rem' :
      pb === 4 ? '1rem' 
      :null
  };
  padding-right: ${
    ({ pr }) => 
      pr === 1 ? '.25rem' :
      pr === 2 ? '.5rem' :
      pr === 3 ? '.75rem' :
      pr === 4 ? '1rem' 
      :null
  };
`
const Box = props =>
  <Container {...props}>
    { props.children }
  </Container>

const modelBoxType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
])
const displayType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool,
])
Box.propTypes = {
  block: displayType,
  flex: displayType,
  alignItem: PropTypes.string,
  justifyContent: PropTypes.string,
  m: modelBoxType,
  mt: modelBoxType,
  mr: modelBoxType,
  ml: modelBoxType,
  mb: modelBoxType,
  p: modelBoxType,
  pt: modelBoxType,
  pr: modelBoxType,
  pl: modelBoxType,
  pb: modelBoxType,
  br: PropTypes.string,
}

export default Box;



