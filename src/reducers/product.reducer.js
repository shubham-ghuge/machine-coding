import productData from "../data/data.json";
export const initialState = {
    data: productData,
    initialData: productData,
    brands: [],
    sizes: ["SM", "MD", "LG", "XL"]
}


export function productReducer(state, action) {
    switch (action.type) {

        case "INITIALIZE_BRANDS":
            return { ...state, brands: action.payload.map(i => ({ name: i, isSelected: false })) };

        case "RESET_FILTERS":
            return { ...state, data: state.initialData }

        case "SORT_BY_PRICE":
            return {
                ...state, data: state.data.sort((i, j) => action.payload ? i.price - j.price : j.price - i.price)
            };

        case "SORT_BY_SIZES":
            return {
                ...state, data: state.initialData.filter(i => i.sizes.includes(action.payload))
            };

        case "IDEAL_FOR":
            return {
                ...state, data: state.initialData.filter((i) => i.gender === action.payload)
            };

        case "SORT_BY_BRAND":
            const { name, status } = action.payload;
            state.brands = state.brands.map(i => {
                if (i.name === name) i.isSelected = !status;
                return i
            })
            const brandsSelected = state.brands.map((i) => i.isSelected && i.name)
            return {
                ...state,
                data: state.initialData.filter(i => brandsSelected.includes(i.brand))
            }

        default:
            return state;
    }
}