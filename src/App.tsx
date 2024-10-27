import * as React from "react";
import './App.scss';
import Header from './components/Header/Header';
import MenuDropDownBtn from "./components/Header/MenuDropDownBtn";
import MenuDropDown from "./components/Header/MenuDropDown";
import Sidebar from './components/Sidebar/Sidebar';
import Library from "./components/sections/Library/Library";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <section id="Library" className="full-page-section" style={{display: "flex"}}>
        <Sidebar />
        <Library/>
        <main>

        </main>
      </section>
      
      <section id="featured-collections" className="full-page-section">
        featured-collections
      </section>

      <section id="footer">
        <footer className="full-page-section">
          footer
        </footer>
      </section>
    </div>
  );
}

export default App;
