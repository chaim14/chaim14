interface FormProps{
 updateFunction:Function   
}
const Form = (props:FormProps) => {
    const {updateFunction}=props
    function handleUpdateimg(ev:any) {
        ev.preventDefault()
const title: string = ev.target.elements.title.value;
const img: string = ev.target.elements.img.value;
console.log(title, img);
updateFunction(title, img)
}
return (
    <form onSubmit={handleUpdateimg}>
        <input type="text" name='title' placeholder='title' />
        <input type="text" name='img' placeholder='imgUrl' />
        <input type="submit" name='Update'/>
    </form>
)
}
export default Form;