import React, { useState } from 'react';
import Cars from './view/conponents/Cars';

interface CarsProps {
  text: string
  price: number
  img: string
  id: string
}

function App() {
  const cars: Array<CarsProps> = [
    { id: 'ert', text: 'pejo', price: 40, img: 'https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcTRL8EuJFfdtMo7bhUVozixYhBM-BVm5ikoPA&usqp=CAU' },
    { id: 'ert', text: 'dcia', price: 50, img: 'https://auto-yashir.com/wp-content/uploads/2018/04/new-dacia-sandero-gets-4-star-euroncap-rating-video-60297_1.jpg' },
    { id: 'ert', text: 'tesla', price: 150, img: 'https://ynet-images1.yit.co.il/picserver5/crop_images/2021/08/01/r1gIbJg41K/r1gIbJg41K_0_0_3000_2000_0_x-large.jpg' },
    { id: 'ert', text: 'suzuki', price: 250, img: "https://www.levinson-car.co.il/wp-content/uploads/2019/11/Suzuki-Vitara-Turbo-2019-1-11-800x533.jpg" },
    { id: 'ert', text: 'kaya', price: 300, img: 'https://www.icar.co.il/_media/articles/4907.jpg' },
    { id: 'ert', text: 'mazda', price: 300, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0zFtXRwCJdA28zwXmy1PYuX7dUcPf4Ywrw&usqp=CAU' },
    { id: 'ert', text: 'chadash', price: 100, img: 'https://www.tgspot.co.il/wp-content/uploads/2016/01/chevrolet-corvette-7.jpg' },
    { id: 'ert', text: 'mertzedes', price: 70, img: 'https://www.renta-car.co.il/media/1343/redcar-copy.png' },
    { id: 'ert', text: 'new', price: 30, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySBxGQ3Z8MEqJ7zhaWHeN8tywNf66cWoJag&usqp=CAU' },
    { id: 'ert', text: 'volvo', price: 50, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsMcezdzCkjEF1gUGH1rYwcIiMNsekJwyaQ&usqp=CAU' },
  ]

  const [query, setQuery] = useState('')


  return (
    <div className="App">
      <header className="App-header">

          <label>search book</label>
          <input id="search-query" type='text'></input>
          <button type='submit'>search</button>

        <a>atar sfarim</a>
        {cars.map((cars, i) => { return <Cars key={i} text={cars.text} price={cars.price} img={cars.img} /> })}

      </header>
    </div>
  );
}
export default App;





