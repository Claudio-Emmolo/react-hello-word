import './App.css';
import Header from './components/Header';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <>
        <header>
          {/* Import Header */}
          <Header />
        </header>

        <main>
          {/* Import HelloWord Section */}
          <HelloWorld />
        </main>
      </>
    </div>
  );
}

export default App;
