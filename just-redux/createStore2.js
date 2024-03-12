import { createStore, bindActionCreators } from "redux";




const initialState = []
function reducer(initialState, action){
    if(action.type == 'add_item') {
        return [...initialState, {name: action.itemName, quantity: action.quantity}]
    }
    return initialState;
} 

const store = createStore(reducer, initialState) 
store.subscribe(() => {
    console.log(store.getState())
})
//action-creator -> function that returns a action object
// -> reduced code(no need to create action for every dispatch)
const add_item = (name, quantity) => ({
    type: 'add_item',
    itemName: name,
    quantity: quantity ? quantity : 1
});

console.log(store.getState())
store.dispatch(add_item('rice')) 


//bindActinoCreators 
// lets us pass down to children without 'dispatch function' 
// -> security issuse as user may change the data

const actions = bindActionCreators({add_item}, store.dispatch) 
actions.add_item('grapes') 
actions.add_item('mango', 52)