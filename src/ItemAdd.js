import React from 'react';

class ItemAdd extends React.Component {

  inputIsEmpty = () => {
    return this.props.value === '';
  };

  render(){
    return (
		<form onSubmit={this.props.handleClick}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>    
    );
  }
}

export default ItemAdd