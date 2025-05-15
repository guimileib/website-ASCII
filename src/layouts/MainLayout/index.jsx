import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';
import './styles.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 