import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    //super needs to be called with constructor
    super();  //call the constructor method for all other classes that is being extended

    this.state = {  //allways a json object
        monsters: [],
        searchField: ''
    };
  }


  //this is what happens when react first renders to the page
  //only happens once
  componentDidMount() {   //this is run whenever the component mounts
    //mounting the first time a component gets placed onto the dom
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //console.log(response));
      .then((users) => //console.log(users))
        this.setState(
          () => {
            return {monsters: users };
          },
          () => {  //callback method
            //console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    //console.log({startingArray: this.state.monsters});
    const searchField = event.target.value.toLocaleLowerCase();  //
    // const filteredMonsters = this.state.monsters.filter((monster) => {
    //     return monster.name.toLocaleLowerCase().includes(searchString);
    // })

    this.setState(() => {
      return {searchField};  //
    }, () => {
      //console.log({endingArray: this.state.monsters})
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);  //
  })

    return ( 
        <div className="App">
          <h1 className="app-title">Monsters Rolodex</h1>
        

            {/* { filteredMonsters.map((monster) => {  //
                return (
                  <div key={monster.id}>
                      <h1>{monster.name}</h1>
                  </div>
                );
              })} */}
        <SearchBox 
            //className='search-box'
            className='monsters-search-box'
            onChangeHandler={onSearchChange} 
            placeholder='search monsters'  />
        <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;
