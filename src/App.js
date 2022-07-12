import { Component } from 'react';
import classes from './App.module.css';
import axios from 'axios';
import Loading from './components/Loading/Loading';
import Drinks from './components/Loading/Drinks/Drinks';

class App extends Component {

  state = {
    loading: false,
    error: null,
    drinks: [],
    inputValue: ''
  }


  submitHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.inputValue)
      .then(response => {
        this.setState({loading: false, error: null, drinks: response.data.drinks});
      })
      .catch(error => {
        this.setState({loading: false, error: error});
      })
  }

  changeHandler = (event) => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    
    return (
      <div className={classes.App}>
        <form onSubmit={this.submitHandler} className={classes.Form}>
          <input value={this.state.inputValue} onChange={this.changeHandler}/>
            <button data-testid="button" onClick={this.submitHandler}>Search</button>
          </form>
          {this.state.loading ? <Loading text='Loading.....'/> : (this.state.drinks.length > 0 ? <Drinks drinks={this.state.drinks}/> : (this.state.error ? <Loading text='Error!!!'/> : null))}
      </div>
    );
  }
}

export default App;
