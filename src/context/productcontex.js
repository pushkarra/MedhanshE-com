import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

// Updated API URL
const API = "https://medhansh-api.vercel.app/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  currentPage: 1, // To track the current page
  totalPages: 1,  // To track total pages
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to fetch products with pagination support
  const getProducts = async (url, page = 1, limit = 18) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(`${url}?page=${page}&limit=${limit}`);
      const data = res.data;

      // Assuming the new API response includes:
      // {
      //   products: [/* array of products */],
      //   totalPages: 5,
      //   currentPage: 1
      // }
      const { products, totalPages, currentPage } = data;

      dispatch({
        type: "SET_API_DATA",
        payload: {
          products,
          totalPages,
          currentPage,
        },
      });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // Function to fetch a single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    getProducts(API); // Default to the first page
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getSingleProduct,
        getProducts, // Expose getProducts for pagination control
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access product context
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };



// import { createContext, useContext, useEffect, useReducer } from "react";
// import axios from "axios";
// import reducer from "../reducer/productReducer";

// const AppContext = createContext();

// // const API = "https://productdataapi-production.up.railway.app/api/products";
// const API = "https://medhansh-api.vercel.app/api/products";

// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   isSingleLoading: false,
//   singleProduct: {},
// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const getProducts = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const products = await res.data;
//       dispatch({ type: "SET_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };

//   // my 2nd api call for single product

//   const getSingleProduct = async (url) => {
//     dispatch({ type: "SET_SINGLE_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const singleProduct = await res.data;
//       dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
//     } catch (error) {
//       dispatch({ type: "SET_SINGLE_ERROR" });
//     }
//   };

//   useEffect(() => {
//     getProducts(API);
//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state, getSingleProduct }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // custom hooks
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };