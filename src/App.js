import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperStepper from './PaperStepper'
injectTapEventPlugin();



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <PaperStepper />
      </MuiThemeProvider>
    );
  }
}

export default App;
