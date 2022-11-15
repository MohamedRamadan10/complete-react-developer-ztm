import { Component } from "react";

class CardList extends Component {
   render() {
      const { monsters } = this.props;

      return (
         <>
            {monsters.map((monster, i) => (
               <h1 key={i}>{monster.firstName}</h1>
            ))}
         </>
      );
   }
}

export default CardList;
