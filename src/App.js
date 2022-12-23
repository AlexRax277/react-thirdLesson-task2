import data from './Listing/etsy.json';
import Listing from './Listing/Listing';

function App() {
  return (
    <Listing items={ data }/>
  );
}

export default App;
