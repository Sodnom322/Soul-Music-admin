import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './navigation';
import { store } from './Store';



function App() {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  )
}

export default App;
