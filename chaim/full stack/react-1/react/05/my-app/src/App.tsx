import React from 'react';
import List from './view/Compenents/List';

interface ListProps{
  text:string
  price:number
  img:string
  id:string
}


function App()
 {const boxes:Array<ListProps>= [
  {id:'ert', text: 'tora vemada', price: 40, img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/6570854/original/afe4ea53ccb7c18bcef5e3b736b802b0.jpg'},
  {id:'ert',text: 'talmud', price: 30, img:  'https://d3m9l0v76dty0.cloudfront.net/system/photos/6571163/large/eef9891e5481542f4a3543410339c38b.jpg'},
  {id:'ert',text: 'gmara', price: 50, img:  'https://d3m9l0v76dty0.cloudfront.net/system/photos/6571164/large/6d3d6fcd2e3dcedebd65d86ce999ee5a.jpg'},
  {id:'ert',text: 'chumash', price: 150, img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/9190662/large/19d00486554c8f15c1435c525af9dfd2.png'},
  {id:'ert',text: 'rambam', price: 250, img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/6577185/original/a7f818b8aac7fe1e73cf4aa145f6d9f4.jpg"},
  {id:'ert',text: 'halacha', price: 200, img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/6571119/original/b1cd07ac801d9638274f4c130cccca74.jpg'},
{id:'ert',text: 'tanya', price:300, img:'https://d3m9l0v76dty0.cloudfront.net/system/photos/9146221/original/042c8d11ec7041bccb839f58efa14ec8.png'},
{id:'ert',text: 'hasidut', price:300, img:'https://d3m9l0v76dty0.cloudfront.net/system/photos/9146221/original/042c8d11ec7041bccb839f58efa14ec8.png'},
{id:'ert',text: 'hasidur', price:100, img:'https://d3m9l0v76dty0.cloudfront.net/system/photos/6570249/original/8fc23161b4a84195df022e6afcef7b7c.jpg'},
{id:'ert',text: 'chitata', price:70, img:'https://d3m9l0v76dty0.cloudfront.net/system/photos/6570256/original/da0b0a978ce841dd81deaa23b385ff94.jpg'},
{id:'ert',text: 'shabat', price:30, img:'https://d3m9l0v76dty0.cloudfront.net/system/photos/6570254/original/17c0df74fbd88436175fc07d2289c5ca.jpg'},
{id:'ert',text: 'machzor', price:50, img:'https://d3m9l0v76dty0.cloudfront.net/system/photos/6571829/original/9ced2bf998e164047a31c3a9294165c3.jpg'},
]
// function update(){
//   try {
//   const index= boxes.findIndex((box)=> box.id====id )
// }
// }
  return (
   
<div></div>
  )}
export default App;