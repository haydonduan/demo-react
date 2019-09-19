import React, { Component } from 'react';
import './App.css';
import { testAction } from './actions/testAction';
import { connect } from 'react-redux';

interface IProps extends IPropsFromState, IPropsFromDispatch {
}

class App extends Component<IProps, {}> {
  onClick = () => {
    this.props.simpleAction('owl')
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>

        <div>
          display the status: {JSON.stringify(this.props.mark)}
        </div>
        <button onClick={this.onClick}>test redux</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  mark: state.mark
});

const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: (params: any) => dispatch(testAction(params))
});

type IPropsFromState = ReturnType<typeof mapStateToProps>;
type IPropsFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(App);
