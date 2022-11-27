import "./category-item.styles.scss";

const Category = ({ id, title, imageUrl }) => (
   <div className="category-item-container" key={id}>
      <div
         className="background-image"
         style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-item-body-container">
         <h2>{title}</h2>
         <p>Shop Now</p>
      </div>
   </div>
);

export default Category;
