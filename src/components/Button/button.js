const getAlert = (label)=>{
    alert(`A label desse botão é ${label}`)
}
const Button = ({label})=> {
    return(
        <>
            <button className= "btn" onClick={()=>{getAlert(label)}}>{label}</button>
        </>
    )
}
export default Button;