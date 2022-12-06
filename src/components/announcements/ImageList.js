

function ImageList({ images }) {
  if(typeof images == "object"){
    return (
      images.map((img, index)=>{
            return (
            <li className="image" key={index}>
              <img src={`${process.env.PUBLIC_URL}/assets/workshops/${img}`} alt='this'/>
            </li>
            )
        })
    )
  }
}

export default ImageList;