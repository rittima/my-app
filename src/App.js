
// import About from './components/About';
import Navbar1 from './components/Navbar1';
import TextForm from './components/TextForm';

function App() {
  
  return (
    <>
      <Navbar1 title="CHODABOKA" home="HOME" about="ABOUT US" />
      <div className='container'>
      <TextForm title="Describe"/>
      {/* <About/> */}
      </div>
      
    </>
    
  );
}

export default App;
