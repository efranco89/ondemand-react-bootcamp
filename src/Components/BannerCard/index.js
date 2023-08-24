const BannerCard = ({ children, render, error, onError, loading, onLoading, banners }) => {
  const renderFunc = children || render;
  return (
    <div className='banner-container'>
      {error && onError()}
      {loading && onLoading()}
      {!error && !loading && banners?.map(renderFunc)}
    </div>
  );
};

export { BannerCard };
