import Header from './components/header/header';
import SectionHero from './components/hero/hero';
import SectionShortening from './components/section-shortening/section-shortening';
import './App.css';

function App() {
  return (
    <main className="container">
      <Header />

      <SectionHero />

      <SectionShortening />
    </main>
  );
}

export default App;
