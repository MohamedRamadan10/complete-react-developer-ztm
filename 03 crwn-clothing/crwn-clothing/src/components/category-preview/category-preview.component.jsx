import { Link } from "react-router-dom";
import { CategoryPreviewContainer } from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
   return (
      <CategoryPreviewContainer>
         <Link to={title}>
            <h2>
               <span className="title">{title.toUpperCase()}</span>
            </h2>
         </Link>
         <div className="preview">
            {products
               .filter((_, idx) => idx < 4)
               .map((product, i) => (
                  <ProductCard product={product} key={i} />
               ))}
         </div>
      </CategoryPreviewContainer>
   );
};

export default CategoryPreview;
