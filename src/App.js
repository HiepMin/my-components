import React, { Component } from 'react';
import Box from './components/Box';
import IconButton from './components/Button/Button';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Box mt={4} flex align="end">
          App component
          <Box br="50%">
            <IconButton sm brCircle outlined bgColor="#c6ff00">
              <i className="icon fab fa-500px" />
            </IconButton>
          </Box>
        </Box>
        
      </div>
    );
  }
}

export default App;
