interface BoxProps{
  text: string
  price: number
 img:string
 update:Function
   
 
 
}
const box = (props:BoxProps) => {
  const {text,price, img}=props
  
  return (
    <div className="Box">
   <img src={img} alt="" />
   <h2>{text}</h2>
   <h4>{price}</h4>
   <p></p>
    </div>
  )
}

export default box