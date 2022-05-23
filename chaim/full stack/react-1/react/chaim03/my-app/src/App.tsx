import { title } from 'process';
import { useState } from 'react'
import Form from './Books';

function App() {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  function update(title: string, img: string) {
    setTitle(title)
    setImg(img)
  }
  return (
    <div className="App">
      {img ? <img src={img} alt='sume user input' /> : null}
      {title ? <p>{title}</p> : null}

      <header className="App-header">
        <Form updateFunction={update} />

      </header>
    </div>
  );
}
export default App;