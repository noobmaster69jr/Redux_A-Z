import {createStore} from 'redux'

function demoReducer(state, action){
    if(action.type== 'add_item'){
        return [...state,{name: action.itemName} ]
    } 
    return state
} 

const initialState = [{name: 'apple'}, {name:'rice'}] 

const store = createStore(demoReducer, initialState)

//subscribe takes a callback and executes when state is updated
store.subscribe(() => {
  console.log('subscribe called when state is updated');
});

console.log(store.getState()) 

//only way to update state in redux
store.dispatch({type: 'add_item', itemName: 'grapes'}) 

console.log(store.getState()) 
