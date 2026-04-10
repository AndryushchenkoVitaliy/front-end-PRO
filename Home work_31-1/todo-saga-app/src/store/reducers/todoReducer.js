import { todoActionTypes } from "../actions/todoActions";

const initialState = {
    items: [],
    loading: false
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case todoActionTypes.FETCH_REQUEST:
            return { ...state, loading: true };

        case todoActionTypes.FETCH_SUCCESS:
            return { ...state, loading: false, items: action.payload };

        case todoActionTypes.ADD_SUCCESS:
            return { ...state, items: [...state.items, action.payload] };

        case todoActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                items: state.items.filter(t => t.id !== action.payload)
            };

        case todoActionTypes.TOGGLE_SUCCESS:
            return {
                ...state,
                items: state.items.map(t =>
                    t.id === action.payload
                        ? { ...t, completed: !t.completed }
                        : t
                )
            };

        case todoActionTypes.EDIT_SUCCESS:
            return {
                ...state,
                items: state.items.map(t =>
                    t.id === action.payload.id
                        ? { ...t, text: action.payload.text }
                        : t
                )
            };

        case todoActionTypes.CLEAR_SUCCESS:
            return { ...state, items: [] };

        default:
            return state;
    }
};