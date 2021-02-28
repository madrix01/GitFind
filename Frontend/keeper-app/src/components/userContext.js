import React from 'react'
const UserContext=React.createContext();
const userProvider=UserContext.Provider;
const userConsumer=UserContext.Consumer;
export {userProvider,userConsumer};
