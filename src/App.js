import './App.css';
// import { Component } from 'react';  this is class component, dont need it anymore
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { useState, useEffect } from 'react';  //useState is simplest hook available, useEffect for side effects



const App = () => {
  const[searchField, setSearchField] = useState(''); //[value, setValue]
  const [title, setTitle] = useState('');  //added

  const [monsters, setMonsters] = useState([]);  //set new state
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  console.log('rendered');

  //use side effects
  //useEffect(callback_function() , [array_of_dependencies]) hook
  //when any values in dependency array changes, run callback function
  //using an empty array, means this should only run on first load
  useEffect(() => {
    //code to execute
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //console.log(response));
    .then((users) => setMonsters(users));
  }, []); //array most likely contains state values or prop values

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();  //
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {   //added
    const searchFieldString = event.target.value.toLocaleLowerCase();  //
    setTitle(searchFieldString);
  };


  return (
  <div className='App'>
    {/* <h1 className='app-title'>Monsters Rolodex</h1> */}
    <h1 className='app-title'>{title}</h1>
    <SearchBox 
            //className='search-box'
            className='monsters-search-box'
            onChangeHandler={onSearchChange} 
            placeholder='search monsters'  />

    <br />
    <SearchBox   //added
            //className='search-box'
            className='title-search-box'
            onChangeHandler={onTitleChange} 
            placeholder='set title'  />

            <CardList monsters={filteredMonsters} />
  </div>
)};








/*class App extends Component {

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
*/
export default App;
