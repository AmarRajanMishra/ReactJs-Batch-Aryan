

function Common(props) {
    // console.log(props)
    const {data} = props
    const {imgSrc, discription} = data
    return (
      <div>
       <div>
        <img src={imgSrc} />
       </div>
       <div>
        <p>{discription}</p>
       </div>
      </div>
    )
  }
  
  export default Common