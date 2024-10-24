import * as React from "react";
import './App.css';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header/>
      <aside>
        sidebar
      </aside>
      <main>
        main
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
