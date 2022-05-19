
interface Ball{
    handleClick:Function
}


const Ball = (props:Ball) => {
    const {handleClick}= props
    const Balls= ['Ball1', 'Ball2', 'Ball3']
    console.log(Ball);
    
  return (
    <div  className='Ball' onClick={()=> handleClick()}></div>
  )
}
export default Ball