import Header from './components/header/header';
import SectionHero from './components/hero/hero';
import SectionShortening from './components/section-shortening/section-shortening';
import SectionAdvanced from './components/section-advanced/section-advanced';
import SectionBoost from './components/section-boost/section-boost';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <main className="container">
      <Header />

      <SectionHero />

      <SectionShortening />

      <SectionAdvanced />

      <SectionBoost />

      <Footer />
    </main>
  );
}

export default App;
