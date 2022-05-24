interface CarsProps{
  text: string
  price: number
 img:string
 
}

const Cars = (props:CarsProps) => {
  const {text,price, img}=props
  
  return (
    <div className="Cars">
      
   <img src={img} alt="" />
   <h2>{text}</h2>
   <h4>{price}</h4>
    </div>
  )
}

export default Cars;