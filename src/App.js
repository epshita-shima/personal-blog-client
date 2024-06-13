import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import CreateBlogPost from './component/blogdatapost/Insert/CreateBlogPost';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<CreateBlogPost></CreateBlogPost>}></Route>
     </Routes>
    </div>
  );
}

export default App;
