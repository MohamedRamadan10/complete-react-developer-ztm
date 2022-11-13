import { Component } from "react";
import "./App.css";

class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchField: "",
      };
   }

   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((users) =>
            this.setState(() => {
               return { monsters: users };
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
         return monster.name.toLocaleLowerCase().includes(searchField);
      });

      return (
         <div className="App">
            <input
               type="search"
               placeholder="Search monsters..."
               onChange={onSearchChange}
            />
            {filteredMonsters.map((monster, i) => (
               <h1 key={i}>{monster.name}</h1>
            ))}
         </div>
      );
   }
}

export default App;
