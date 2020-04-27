export const refs = (state = [], action) => {
    switch (action.type) {
        case 'REFS_DATA':
            return action.refs;
        default:
            return state;
    }
}