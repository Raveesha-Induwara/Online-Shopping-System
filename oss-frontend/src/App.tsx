import { AppLayout } from './Components/AppLayout';
import CategoriesContent from './pages/Categories/Categories';
import './App.css';

function App() {
  return (
    <>
      <div className="OuterDiv">

        <AppLayout>
          <CategoriesContent/>
        </AppLayout>

        <div className="content">
          
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
