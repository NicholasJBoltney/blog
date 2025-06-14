"use client";

import React from 'react';
import { GoogleAdsenseScript } from './GoogleAdsenseScript';
import { BannerAds } from './BannerAds';

interface AdLayoutWrapperProps {
  children: React.ReactNode;
}

export const AdLayoutWrapper: React.FC<AdLayoutWrapperProps> = ({ children }) => {
  // A simple pageId for the layout ads. You might want to generate a more dynamic one if ads per page are critical.
  const pageId = "main-layout"; 

  return (
    <>
      <head>
        <GoogleAdsenseScript />
      </head>
      <BannerAds position="left" pageId={pageId} />
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {children}
      </main>
      <BannerAds position="right" pageId={pageId} />
    </>
  );
}; 