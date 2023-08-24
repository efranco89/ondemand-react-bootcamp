const BannerCardItem = ({ src, alt, title, description }) => {
  return (
    <div className='banner-card'>
      <img src={src} alt={alt} className='banner-img' />
      <div className='banner-footer'>
        <p className='banner-footer-title'>{title} </p>
        <p className='banner-footer-description'>{description}</p>
      </div>
    </div>
  );
};

export { BannerCardItem };
