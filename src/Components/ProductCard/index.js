const ProductCard = (props) => {
  const renderFunc = props.children || props.render;
  return (
    <div className='products__container-cards'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.error && props.products.map(renderFunc)}
    </div>
  );
};

export { ProductCard };
