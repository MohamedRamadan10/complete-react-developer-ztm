function App() {
   const arr = [1, 2, 3, 4, 5];
   return (
      <div className="categories-container">
         <div className="category-container">
            {arr.map((i) => (
               <div className="category-body container">
                  <h2>Hats</h2>
                  <p>Shop Now</p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;
