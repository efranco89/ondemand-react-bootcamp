function CategoryCard(props) {
  const renderFunc = props.children || props.render;
  return (
    <div className='categories__container-cards'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.error && props.categories.map(renderFunc)}
    </div>
  );
}

export { CategoryCard };
