import ChatWidget from './components/ChatWidget';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="app-wrapper">
      <Hero />
      <Dashboard />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;