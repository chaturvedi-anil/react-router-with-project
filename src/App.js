import {Outlet} from 'react-router-dom';
import {Header,Footer} from './components';
function App() {
  return (
    <>
      <Header/>
      {/* add nesting functionality for different components (it is a template) */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
