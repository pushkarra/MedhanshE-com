const ProductReducer = (state, action) => {


  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

      // case "SET_API_DATA":
      //   // console.log("Payload received:", action.payload);
      //   const featureData = Array.isArray(action.payload)
      //     ? action.payload.filter((curElem) => curElem.featured === true)
      //     : [];
      //   return {
      //     ...state,
      //     isLoading: false,
      //     products: Array.isArray(action.payload) ? action.payload : [],
      //     featureProducts: featureData,
      //   };

      case "SET_API_DATA":
  const products = action.payload?.products || []; // Extract products array from payload
  const featureData = products.filter((curElem) => curElem.featured === true); // Filter featured products
  return {
    ...state,
    isLoading: false,
    products: products,
    featureProducts: featureData,
  };


    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;