interface BooksProps{
  text: string
  price: number
 img:string

   
 
 
}
const box = (props:BooksProps) => {
  const {text,price, img}=props
  
  return (
    <div className="Box">
   <img src={img} alt="" />
   <h2>{text}</h2>
   <h4>{price}</h4>
    </div>
  )
}

export default box