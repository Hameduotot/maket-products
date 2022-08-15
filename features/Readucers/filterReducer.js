import { products } from "../../components/ProductsSlice/FeaturedProduct";

const filterReducer = (state = products, action) => {
  switch (action.type) {
    case "category/filter":
      const filterCategory = state.filter((product) => {
        if (action.payload === "all") {
          return product;
        }

        return product.catergory === action.payload;
      });
      return filterCategory;
    case "company/filter":
      const companyFilter = state.filter((product) => {
        if (action.payload === "all") {
          return product;
        }
        return product.company === action.payload;
      });
    case "color/filter":
      const fitlerColor = state.filter((product) => {
        if (action.payload === "all") {
          return product;
        }
        return product.color.includes(action.payload);
      });
    default:
      return state;
  }
};

export default filterReducer;
