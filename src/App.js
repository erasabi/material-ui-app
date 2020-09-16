import React from 'react';
import Header from './components/ui/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Hello cant be seen because its hidden behind appBar */}
      Hello
    </div>
  );
}

export default App;
