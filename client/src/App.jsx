import { Welcome, Transactions, Footer } from './components';

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Welcome />
    </div>
    <Transactions />
    <Footer />
  </div>
);

export default App;
