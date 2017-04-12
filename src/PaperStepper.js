import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-downward';


class PaperStepper extends Component{
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 4,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 0 ? 'Accept' : 'Next'}
          // label={stepIndex === 4 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render(){
    const {finished, stepIndex} = this.state;
    return (
      <Paper zDepth={2}  style={{'marginTop':'5%'}}>
      <div style={{maxWidth: 'auto', maxHeight: 'auto', margin: 'auto'}}>
      <Stepper activeStep={stepIndex} orientation="vertical">
        <Step>
          <StepLabel>Accept</StepLabel>
          <StepContent>
            <p>
              Please Accept
            </p>
            {this.renderStepActions(0)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>On the Road</StepLabel>
          <StepContent>
            <p>An ad group contains one or more ads which target a shared set of keywords.</p>
            {this.renderStepActions(1)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Start task</StepLabel>
          <StepContent>
            <p>
              Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              theyre running and how to resolve approval issues.
            </p>
            {this.renderStepActions(2)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Close Task</StepLabel>
          <StepContent>
            <p>
              Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              theyre running and how to resolve approval issues.
            </p>
            {this.renderStepActions(3)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Arrived</StepLabel>
          <StepContent>
            <p>
              Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              theyre running and how to resolve approval issues.
            </p>
            {this.renderStepActions(4)}
          </StepContent>
        </Step>
      </Stepper>
      {finished && (
        <p style={{margin: '20px 0', textAlign: 'center'}}>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              this.setState({stepIndex: 0, finished: false});
            }}
          >
            Click here
          </a> to reset the example.
        </p>
      )}
    </div>
      </Paper>
    )
  }
}

export default PaperStepper;
