import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const win = window;

// compose 就是把一个让方法都连接在一块，一个方法返回值就是一个方法的入参，这样一直嵌套下去，最终也是一个function，
// 所以，最后的的f => f 就是为了不把这种方式破坏，类似于在电脑上配置环境变量一样，每次配置了一个环境变量都要export PATH，以便后续的PATH接着这个方式继续配置
const finalCreateStore = compose(
  applyMiddleware(thunk),
  win && win.__REDUX_DEVTOOLS_EXTENSION__ ? win.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f
);

export default () => createStore(rootReducer, {}, finalCreateStore);


