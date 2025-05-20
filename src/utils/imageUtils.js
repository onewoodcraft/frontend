export const getImageUrl = (path) => {
  if (!path) return '/assets/img/placeholder.jpg';
  
  // Handle Cloudinary URLs
  if (path.startsWith('http')) return path;
  
  // Handle local images
  return `/assets/img/${path}`;
}; 