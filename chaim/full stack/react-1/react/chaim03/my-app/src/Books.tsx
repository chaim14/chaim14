


interface BooksProps{
    text: string
    price: number
   img:string
  
     
   
   
  }
  const Books = (props:BooksProps) => {
    const {text,price, img}=props
    
    return (
      <div className="Books">
     <img src={img} alt="" />
     <h2>{text}</h2>
     <h4>{price}</h4>
      </div>
    )
  }
  
  export default Books