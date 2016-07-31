import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const h1Style={
  fontSize:100,
  color: 'gray',
  position: 'absolute',
  left: '500px',
  top: '40px',
  fontFamily:'Helvetica',
};

const divStyle={
  position: 'absolute',
  left: '500px',
  top: '250px',
};
const inputStyle = {
  padding:'10px',
  width:'250'
};

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <h1 style={h1Style}>todos</h1>
        <div style={divStyle}>
        <input  style={inputStyle} autoFocus="true"
                type='text' ref='input' placeholder="What needs to be done?"
                onKeyPress={e=>{this.handleClick(e)}}/>
          </div>
      </div>
  );
  }

  handleClick(e) {
       if(e.key == 'Enter') {
          const inputNode = findDOMNode(this.refs.input);
          const text = inputNode.value.trim();
           if(text !== '') {
               this.props.onAddClick('✘' + text);
               inputNode.value = '';
               inputNode.focus();
           }else{
               alert("Don't add empty task!");
           }
       }
    }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
