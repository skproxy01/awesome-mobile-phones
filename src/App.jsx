import { Suspense } from 'react';
import './App.css'
import Mobiles from './components/Mobiles/Mobiles';

function App() {

  const mobilePromises = fetch('mobiles.json').then((res) => res.json());
  // console.log(mobilePromises);

  return (
    <>
      <h1>Buy Awesome Mobile Phones</h1>
      <Suspense fallback={<h3>Data Are Loading...</h3>}>
        <Mobiles
          mobilePromises={mobilePromises}>
        </Mobiles>
      </Suspense>
    </>
  )
}

export default App
