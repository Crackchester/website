

function ImageList({ images }) {
  if(typeof images == "object"){
    return (
      images.map((img, index)=>{
            return (
            <li className="image" key={index}>
              <img src={img} alt='this'/>
            </li>
            )
        })
    )
  }
}

export default ImageList;