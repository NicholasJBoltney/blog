import { useEffect, useState } from 'react';
import { AD_CONFIG } from '@/config/ads';

export const useAdCompliance = (pageId: string) => {
  const [adCount, setAdCount] = useState(0);
  const [canShowAd, setCanShowAd] = useState(false);

  useEffect(() => {
    // Check if we can show more ads on this page
    setCanShowAd(adCount < AD_CONFIG.MAX_ADS_PER_PAGE);
  }, [adCount]);

  const incrementAdCount = () => {
    if (adCount < AD_CONFIG.MAX_ADS_PER_PAGE) {
      setAdCount(prev => prev + 1);
    }
  };

  const checkContentLength = (content: string): boolean => {
    const wordCount = content.trim().split(/\s+/).length;
    return wordCount >= AD_CONFIG.MIN_CONTENT_LENGTH;
  };

  return {
    adCount,
    canShowAd,
    incrementAdCount,
    checkContentLength,
    maxAdsPerPage: AD_CONFIG.MAX_ADS_PER_PAGE,
  };
}; 