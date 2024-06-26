import { AnyAction } from "redux";
import { 
    Category } from "./category.type";
import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from "./category.action";

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoryReducer = (state = INITIAL_STATE, action: AnyAction): CategoriesState => {
    if(fetchCategoriesStart.match(action)){
        return {
            ...state,
            isLoading: true,
        };
    };

    if(fetchCategoriesSuccess.match(action)){
        return {
            ...state,
            categories: action.payload,
            isLoading: false,
        };
    };

    if(fetchCategoriesFailed.match(action)){
        return {
            ...state,
            error: action.payload,
            isLoading: false,
        };
    };

    return state;
};
