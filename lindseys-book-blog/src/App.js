import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { Blog, Home, Header, Genre } from './components'

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='' element={<Home/>} />
          <Route exact path='/book/:slug' element={<Blog/>} />
          <Route exact path='/:genre' element={<Genre/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
