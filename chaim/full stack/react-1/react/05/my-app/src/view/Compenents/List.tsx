interface ListProps{
    text: string
    price: number
   img:string
   update:Function
     
   
   
  }
  const List = (props:ListProps) => {
    const {text,price, img}=props
    
    return (
      <div className="List">
     <img src={img} alt="" />
     <h2>{text}</h2>
     <h4>{price}</h4>
     <p></p>
      </div>
    )
  }
  
  
  export default List