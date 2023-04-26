import { useEffect, useState, ChangeEvent} from 'react';
//import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css';

import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setvalue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((users) => setMonsters(users)
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }; 
    fetchUsers();
  },[]);
    
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    setFilteredMonsters(newFilteredMonsters);
  },[searchField, monsters]); 
    

  console.log(searchField);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) : void => {
             
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
 
  };

  
  return (
    <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>


        <SearchBox 
        className = 'monster-search-box'
        onChangeHandler = {onSearchChange}
        placeholder = 'search monsters'
        />
        <CardList monsters={filteredMonsters}/>
        
      </div>
  )

// class App extends Component {

//   constructor(){
//     super();
   
//     this.state = {
//       monsters:[],
//       searchField: ''
      
//     };

//   }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) =>
//   this.setState(
//     () => {
//       return {monsters : users};
//       },
//       () => {
//       console.log(this.state);
//       }
//     )
     
//     );
//   }

//   onSearchChange = (event) => {
            
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });

//     }


//   render(){
   
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
    
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         
//         <SearchBox 
//         classname = 'monster-search-box'
//         onChangeHandler = {onSearchChange}
//         placeholder = 'search monsters'
//         />
//         <CardList monsters={filteredMonsters}/>
        
//       </div>
//     );
//   }
  
// }
}
export default App;
