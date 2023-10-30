import { createContext, useReducer, useEffect } from 'react'

const initial_state = {
    balance: localStorage.getItem('balance') || 0,
}

export const BalanceContext = createContext(initial_state);

const BalanceReducer = (state, action) => {
   switch (action.type) {
      case 'SET_BALANCE':
         return {
           balance : action.payload,
         }
   }
}


export const BalanceProvider = ({ children }) => {

   const [state, dispatch] = useReducer(BalanceReducer, initial_state);

   useEffect(() => {
    // Save balance to localStorage
    localStorage.setItem('balance', state.balance.toString());
  }, [state.balance]);

  useEffect(() => {
    // Retrieve balance from localStorage on component mount
    const savedBalance = localStorage.getItem('balance');
    if (savedBalance) {
      dispatch({ type: 'SET_BALANCE', payload: parseInt(savedBalance) });
    }
  }, []);

   return <BalanceContext.Provider value={{
      balance : state.balance,
      dispatch,
   }}>
      {children}
   </BalanceContext.Provider>
}