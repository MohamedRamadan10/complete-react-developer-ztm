import Category from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => (
   <>
      {categories.map(({ id, title, imageUrl }) => (
         <Category key={id} title={title} imageUrl={imageUrl} />
      ))}
   </>
);

export default Directory;
