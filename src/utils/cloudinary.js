export const getCloudinaryUrl = (publicId) =>
  publicId
    ? `https://res.cloudinary.com/dvr4qijcg/image/upload/${publicId}`
    : '/assets/img/product/quick-view-1.jpg'; // fallback image 