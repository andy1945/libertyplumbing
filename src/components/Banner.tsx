import React from 'react';
import bannerBg from '@/assets/bunner.jpg';

interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <section
      className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Banner;