import React, { Component } from 'react';
import { testAction } from './actions/testAction';
import { connect } from 'react-redux';
import style from './App.less';

interface IProps extends IPropsFromState, IPropsFromDispatch {
}

class App extends Component<IProps, {}> {
  onClick = () => {
    this.props.simpleAction('owl')
  };

  render() {
    return (
      <div className={style.APP}>
        <div className="no-module">
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
