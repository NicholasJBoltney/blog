import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any[];
  }
}

interface GoogleAdsProps {
  adSlot: string;
  adFormat?: string;
  style?: React.CSSProperties;
}

export const GoogleAds: React.FC<GoogleAdsProps> = ({ adSlot, adFormat = 'auto', style }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Error loading Google Ads:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}; 