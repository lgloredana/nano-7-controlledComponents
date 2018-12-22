import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemAdd from './ItemAdd';
import ItemDelete from './ItemDelete';
import ItemList from './ItemList';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  itemAdd = event => {
    event.preventDefault();
    const that = this;
    that.setState(oldState => ({
      items: [...oldState.items, that.state.value]
    }));
  };

  itemDelete = event => {
    const that = this;
    that.setState(prevState => ({ items: that.state.items.slice(0, -1) }));
  };

  handleChange = event => {
    const evValue = event.target.value ;
    const that = this;
    that.setState({ value: evValue});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<ItemAdd value={this.state.value} handleChange={this.handleChange} handleClick={this.itemAdd} />
		<ItemDelete items={this.state.items} handleClick={this.itemDelete}/>
		<ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
