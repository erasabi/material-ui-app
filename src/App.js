import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/ui/Header';
import theme from './components/ui/Theme';
import Footer from './components/ui/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* Hello cant be seen because its hidden behind appBar */}
      Hello
      <Footer />
    </ThemeProvider>
  );
}

export default App;
