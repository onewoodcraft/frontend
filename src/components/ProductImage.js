import { useState } from 'react';
import { getImageUrl } from '../utils/imageUtils';

const ProductImage = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img 
      src={getImageUrl(imgSrc)}
      alt={alt}
      onError={() => setImgSrc(null)}
    />
  );
};

export default ProductImage; 