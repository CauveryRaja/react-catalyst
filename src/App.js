import { Greeting } from './App.style';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Greeting>Hello, Welcome to React</Greeting>
      <Footer />
    </div>
  );
}

export default App;
