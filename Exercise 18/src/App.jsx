import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const temp = await res.json();
        setData(temp);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  return (
    <>
      <Navbar  />
      <div className='cards'>

      {data.map((item) => (
        
        <Cards key={item.id} content={item} />
      ))}
      </div>
    </>
  );
}

export default App;


