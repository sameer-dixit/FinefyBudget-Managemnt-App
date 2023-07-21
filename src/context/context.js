import React,{useReducer,createContext} from 'react';
import contextReducer from './contextReducer';

const initialState=JSON.parse(localStorage.getItem('transactions')) ||  [[{"amount":600,"category":"Extra income","type":"Income","date":"2023-03-21","id":"56be2797-1fc8-4f54-a1fb-a3802d233abb"},{"amount":7000,"category":"Investments","type":"Income","date":"2023-03-21","id":"2a7871ac-49c3-45b6-98c5-0103fc70af14"}]	
];
export const ExpenseTrackerContext=createContext(initialState);
export const Provider=({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer,initialState);
    // action creaters
    const deleteTransaction=(id)=>{dispatch({type:'DELETE_TRANSACTION',payload:id});}
    const addTransaction=(transaction)=>{dispatch({type:'ADD_TRANSACTION',payload:transaction});}
    console.log(transactions);

    const balance = transactions.reduce((acc,currVal) =>currVal.type === 'Expense' ? acc-currVal.amount : acc+currVal.amount,0);
    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )

}