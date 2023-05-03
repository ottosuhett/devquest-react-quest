import './App.css';
import Card from './components/Cards/card.js'
import Button from'./components/Button/button.js'

function App() {
  return (
    <div className="text">
      <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius odio id turpis lacinia vulputate a sed massa." color ="red"/>
      <Button label="Click Aqui"/>
    </div>
  );
}

export default App;
