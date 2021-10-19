import { Route } from 'react-router';
import './App.css';
import Article from './screens/article';
import Articles from './screens/articles';
import Header from './components/header';
import {data} from './data';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/articles" render={() => <Articles data={data} /> } />
      <Route exact path="/articles/:idx" component={Article}/>
    </div>
  );
}

export default App;
