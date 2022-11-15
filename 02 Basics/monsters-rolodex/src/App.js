import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
   const [searchField, setSearchField] = useState("");
   const [monsters, setMonsters] = useState([]);
   const [filteredMonsters, setFilteredMonsters] = useState(monsters);

   useEffect(() => {
      fetch("https://dummyjson.com/users")
         .then((res) => res.json())
         .then((data) => setMonsters(data.users));
   }, []);

   useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
         return monster.firstName.toLocaleLowerCase().includes(searchField);
      });

      setFilteredMonsters(newFilteredMonsters);
   }, [monsters, searchField]);

   const onSearchChange = (e) => {
      const searchFieldStr = e.target.value.toLocaleLowerCase();
      setSearchField(searchFieldStr);
   };

   return (
      <div className="app">
         <div className="app-title">Monsters Rolodex</div>
         <SearchBox
            onChangeHandler={onSearchChange}
            placeholder="Search monsters..."
            className="search-box-monsters"
         />
         <CardList monsters={filteredMonsters} />
      </div>
   );
};

// class App extends Component {
//    constructor() {
//       super();

//       this.state = {
//          monsters: [],
//          searchField: "",
//       };
//    }

//    componentDidMount() {
//       fetch("https://dummyjson.com/users")
//          .then((res) => res.json())
//          .then((data) =>
//             this.setState(() => {
//                return { monsters: data.users };
//             })
//          );
//    }

//    onSearchChange = (e) => {
//       const searchField = e.target.value.toLocaleLowerCase();

//       this.setState(() => {
//          return { searchField };
//       });
//    };

//    render() {
//       const { monsters, searchField } = this.state;
//       const { onSearchChange } = this;

//       const filteredMonsters = monsters.filter((monster) => {
//          return monster.firstName.toLocaleLowerCase().includes(searchField);
//       });

//       return (
//          <div className="App">
//             <div className="app-title">Monsters Rolodex</div>
//             <SearchBox
//                onChangeHandler={onSearchChange}
//                placeholder="Search monsters..."
//                className="search-box-monsters"
//             />
//             <CardList monsters={filteredMonsters} />
//          </div>
//       );
//    }
// }

export default App;
