import React from 'react';

class ItemDelete extends React.Component {
  noItemsFound= () => {
    return this.props.items.length === 0;
  };
  render(){
    return (
      <button onClick={this.props.handleClick} disabled={this.noItemsFound()}>
          Delete Last Item
      </button>
    );
  }
}

export default ItemDelete