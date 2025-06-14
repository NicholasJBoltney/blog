import { GoogleAds } from './GoogleAds';
import { AD_CONFIG } from '@/config/ads';

interface BannerAdsProps {
  position: 'left' | 'right';
  pageId: string; // To track ad count per page
}

export const BannerAds: React.FC<BannerAdsProps> = ({ position, pageId }) => {
  // For development, show a placeholder
  if (process.env.NODE_ENV === 'development') {
    return (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          [position]: '0',
          transform: 'translateY(-50%)',
          width: AD_CONFIG.AD_SIZES.BANNER.width,
          height: AD_CONFIG.AD_SIZES.BANNER.height,
          backgroundColor: '#f0f0f0',
          border: '1px dashed #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          // Add clear visual distinction from navigation
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '4px',
        }}
        role="complementary"
        aria-label="Advertisement"
      >
        <p style={{ textAlign: 'center', color: '#666' }}>
          Ad Banner Placeholder
          <br />
          ({AD_CONFIG.AD_SIZES.BANNER.width}x{AD_CONFIG.AD_SIZES.BANNER.height})
        </p>
      </div>
    );
  }

  // For production, show actual Google Ads
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        [position]: '0',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        // Add clear visual distinction from navigation
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '4px',
      }}
      role="complementary"
      aria-label="Advertisement"
    >
      <GoogleAds
        adSlot="YOUR-BANNER-AD-SLOT-ID" // Replace with your banner ad slot ID
        style={{
          display: 'block',
          width: AD_CONFIG.AD_SIZES.BANNER.width,
          height: AD_CONFIG.AD_SIZES.BANNER.height,
        }}
      />
    </div>
  );
}; 