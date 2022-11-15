import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchField: "",
      };
   }

   componentDidMount() {
      fetch("https://dummyjson.com/users")
         .then((res) => res.json())
         .then((data) =>
            this.setState(() => {
               return { monsters: data.users };
            })
         );
   }

   onSearchChange = (e) => {
      const searchField = e.target.value.toLocaleLowerCase();

      this.setState(() => {
         return { searchField };
      });
   };

   render() {
      const { monsters, searchField } = this.state;
      const { onSearchChange } = this;

      const filteredMonsters = monsters.filter((monster) => {
         return monster.firstName.toLocaleLowerCase().includes(searchField);
      });

      return (
         <div className="App">
            <input
               type="search"
               placeholder="Search monsters..."
               onChange={onSearchChange}
            />
            <CardList monsters={filteredMonsters} />
         </div>
      );
   }
}

export default App;
