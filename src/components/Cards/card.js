const Card = ({text,color})=>{
    return (
        <div className="text">
            <p style={{color:color}}>{text.toUpperCase()}</p>     
        </div> 
    )
}
export default Card;