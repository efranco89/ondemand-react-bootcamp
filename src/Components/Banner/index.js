import React from 'react';
import { BannerContext } from '../../Contexts/BannerContext';
import { BannerCard } from '../BannerCard';
import { Error } from '../Error';
import { Loading } from '../Loading';
import { BannerCardItem } from '../BannerCardItem';

import './css/style.css';

const Banner = () => {
  const { loading, error, banners } = React.useContext(BannerContext);
  return (
    <section className='banners'>
      <BannerCard
        error={error}
        loading={loading}
        banners={banners}
        onError={() => <Error />}
        onLoading={() => <Loading />}
        render={(banner) => (
          <BannerCardItem
            key={banner.id}
            src={banner.data.main_image.url}
            alt={banner.data.main_image.alt}
            title={banner.data.title}
            description={banner.data.description?.[0].text}
          />
        )}
      ></BannerCard>
    </section>
  );
};

export { Banner };
