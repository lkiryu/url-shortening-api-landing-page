import Header from './components/header/header';
import SectionHero from './components/hero/hero';
import SectionShortening from './components/section-shortening/section-shortening';
import SectionAdvanced from './components/section-advanced/section-advanced';
import './App.css';

function App() {
  return (
    <main className="container">
      <Header />

      <SectionHero />

      <SectionShortening />

      <SectionAdvanced />
    </main>
  );
}

export default App;
