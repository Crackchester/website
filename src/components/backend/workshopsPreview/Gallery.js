import React, {useEffect, useState} from "react";
import CrossfadeImage from "react-crossfade-image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Gallery = (props) => {
  const [ imgIndex, setImgIndex ] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex(imgIndex => (imgIndex + 1) % props.images.length)
    }, 3000);
    return () => clearInterval(interval)
  }, [props.images])

  return <CrossfadeImage 
    src={`${process.env.PUBLIC_URL}/assets/workshops/${props.images[imgIndex]}`} 
    style={{
      maxWidth: width >= 768 ? '90%' : '60vw', 
      maxHeight: width >= 768 ? '20vw' : '60vw', 
      right: width >= 768 ? '0' : 'unset'
    }}
    alt='Workshop' 
  />
}

export default Gallery;