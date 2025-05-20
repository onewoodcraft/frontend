import { useState } from 'react';
import Image from 'next/image';
import { getCloudinaryUrl } from '@/utils/cloudinaryUtils';

/**
 * Image component with proper error handling and fallbacks
 * Handles both Next.js Image and standard img tags
 */
const ImageWithFallback = ({
  src,
  alt = 'Image',
  width,
  height,
  className = '',
  priority = false,
  useNextImage = false,
  ...props
}) => {
  // Track if the image has errored
  const [error, setError] = useState(false);
  
  // Get processed image URL with fallback
  const imgSrc = error ? '/assets/img/placeholder.jpg' : getCloudinaryUrl(src);
  
  // Handle image load errors
  const handleError = () => {
    setError(true);
  };

  // Use Next.js Image component if specified
  if (useNextImage && width && height) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={handleError}
        {...props}
      />
    );
  }
  
  // Fallback to standard img tag
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback; 