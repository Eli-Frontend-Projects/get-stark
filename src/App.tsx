import * as React from "react";
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Library from "./components/sections/Library/Library";
import FeatureCollection from "./components/sections/Library/FeatureCollection";
import Footer from "./components/sections/Library/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <section id="Library" className="full-page-section Library">
        <Sidebar />
        <main> 
          <Library/>
      <section id="featured-collections" className="full-page-section">
          <FeatureCollection/>
      </section>
        </main>
      </section>
      

        <footer className="full-page-section">
          <Footer/>
        </footer>
    </div>
  );
}

export default App;
