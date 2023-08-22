import React from "react";

const BannerCard = (props) => {
  const renderFunc = props.children || props.render
  return(
    <div className="banner-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.error && !props.loading) && props.banners.map(renderFunc)} 
    </div>
  )
}

export { BannerCard }