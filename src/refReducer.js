export const initialStateRef = []

export const refReducer = (state, action) => {
    switch (action.type) {
        case 'ref':
            return {...action.ref};
        default:
            return state;
    }
}