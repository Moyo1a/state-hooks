import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';

export const UserContext=  React.createContext()
export const ChannelContext = React.createContext()

// import logo from './logo.svg';
// import './App.css';
// import ClassCounter from './components/ClassCounter';
// import HookState from './components/HookState';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounterOne from './components/HookCounterOne';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClass from './components/IntervalClass';
// import IntervalHook from './components/IntervalHook';
// import DataFetching from './components/DataFetching';


// export const ChannelContext =React.createContext()


function App() {
  return (
    <div className="App">
     {/* <ClassCounter /> */}
     {/* <HookState /> */}
     {/* <HookCounterThree /> */} 
     {/* <HookCounterFour /> */} 
     {/* <ClassCounterOne />  */}
     {/* <ClassMouse />  */}
     {/* <MouseContainer /> */}
     {/* <IntervalClass /> */}
     {/* <IntervalClass /> */}
     {/* <IntervalHook /> */}
     {/* <DataFetching /> */} 
    {/* < UserContext.Provider value={'Vishwas'}>
      <ChannelContext.Provider value={'code Evolution    '}>
      <ComponentC />
      </ChannelContext.Provider>
    </UserContext.Provider> */}
    {/* <CounterTwo /> */}
    {/* <CounterThree /> */}

    
  

    </div>
  ); 
}

export default App;