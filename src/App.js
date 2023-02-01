import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {IncAction} from './actions';
import {DecAction} from './actions'


const App = ({local_variable,IncAction,DecAction}) => {
  return (<div>
    <h1>{local_variable} </h1>
    <button onClick={IncAction}>Increment1</button>
    <button onClick={DecAction}>Decrement1</button>
  </div>)
}

const mapStateToProps= state =>({
  local_variable:state
})
export default connect(mapStateToProps,{IncAction,DecAction}) (App);
