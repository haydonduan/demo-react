import React, { Component } from 'react';
import { testAction } from './actions/testAction';
import { connect } from 'react-redux';
import style from './App.less';
//@ts-ignore
import IframeResizer from 'iframe-resizer-react/dist/index';

interface IProps extends IPropsFromState, IPropsFromDispatch {
}

class App extends Component<IProps, {}> {
  iframeRef: any;

  handleOnScroll = () => {
    this.iframeRef.sendMessage('parent message : ' + new Date())
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  render() {
    return (
      <div className={style.APP} onScroll={this.handleOnScroll}>
        <div style={{backgroundColor: 'red', height: 300, width: '100%'}}>
          adfads
        </div>

        <IframeResizer
          forwardRef={(ref: any) => this.iframeRef = ref}
          heightCalculationMethod="lowestElement"
          log={false}
          src="http://localhost:8000/#/product-catalogue"
          style={{ width: '1px', minWidth: '100%' }}
        />
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
