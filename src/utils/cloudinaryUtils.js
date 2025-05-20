/**
 * Utility functions for handling Cloudinary images
 * Provides proper URL conversion and fallback handling
 */

/**
 * Generate Cloudinary URL from image path 
 * @param {string} imagePath - The image path or URL
 * @param {Object} options - Additional options for Cloudinary transformation
 * @returns {string} - Properly formatted image URL
 */
export const getCloudinaryUrl = (imagePath, options = {}) => {
  // Default fallback image
  const fallbackImage = '/assets/img/placeholder.jpg';
  
  // If no image path provided, return fallback
  if (!imagePath) return fallbackImage;
  
  // If already a Cloudinary URL, return as is
  if (imagePath.includes('cloudinary.com')) return imagePath;
  
  // If full HTTP URL but not Cloudinary, return as is
  if (imagePath.startsWith('http')) return imagePath;
  
  // For local images in /assets/img, keep as is
  if (imagePath.startsWith('/assets/img')) return imagePath;
  
  // Default: if it's a relative path, prefix with /assets/img/
  return imagePath.startsWith('/') ? imagePath : `/assets/img/${imagePath}`;
};

/**
 * Check if image exists by preloading it
 * @param {string} url - The image URL to check
 * @returns {Promise<boolean>} - Whether image exists
 */
export const checkImageExists = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}; 