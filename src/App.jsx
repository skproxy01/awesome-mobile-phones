import { Suspense } from 'react';
import './App.css'
import Mobiles from './components/Mobiles/Mobiles';

function App() {

  const mobilePromises = fetch('mobiles.json').then((res) => res.json());
  // console.log(mobilePromises);

  return (
    <>
      <h1>Buy Awesome Mobile Phones</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam, itaque maiores, tenetur perferendis ducimus perspiciatis unde doloremque culpa error possimus, assumenda ad suscipit praesentium tempora nulla? Nam, odio eum!</p>
      <Suspense fallback={<h3>Data Are Loading...</h3>}>
        <Mobiles
          mobilePromises={mobilePromises}>
        </Mobiles>
      </Suspense>
    </>
  )
}

export default App
