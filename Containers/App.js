import React, {Component} from 'react';
import {connect} from "react-redux";

import {getList} from "../Containers/action";

class App extends Component {
    componentDidMount() {
        this.props.getList();
    }
    render () {
        return ( 
        <div className="container">  
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody >
              {this.props.user.list.map((data, index) => {
                return (                    
                    <tr key={data.ID}>
                      <th scope="row">{data.ID}</th>
                      <td>{data.Name}</td>
                      <td>{data.Age}</td>
                    </tr>
                );
              })}
           </tbody>
        </table>
      </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
      user: state.reducer
    }
  }
  
  const mapDispatchToProp = (dispatch) => {  
    return {
      getList: (name) => {dispatch(getList())},
      
    }
  }
  
  export default connect(mapStateToProp, mapDispatchToProp)(App);