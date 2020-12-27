import ACTIONTYPE from './type.js';

 export const toggleCartHidden = () => ({
    type: ACTIONTYPE.TYPE
});

export const addItem = (item) => ({
    type: ACTIONTYPE.ADD_ITEM,
    payload:item
})

