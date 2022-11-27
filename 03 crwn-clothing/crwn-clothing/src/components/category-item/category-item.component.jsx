import { useNavigate } from "react-router-dom";
import {
   BackgroundImage,
   CategoryItemBodyContainer,
   CategoryItemContainer,
} from "./category-item.styles";

const Category = ({ id, title, imageUrl, route }) => {
   const navigate = useNavigate();

   const onNavigationHandler = () => navigate(route);

   return (
      <CategoryItemContainer key={id} onClick={onNavigationHandler}>
         <BackgroundImage imageUrl={imageUrl} />
         <CategoryItemBodyContainer>
            <h2>{title}</h2>
            <p>Shop Now</p>
         </CategoryItemBodyContainer>
      </CategoryItemContainer>
   );
};
export default Category;
