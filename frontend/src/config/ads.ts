export const AD_CONFIG = {
  // Maximum number of ad units per page
  MAX_ADS_PER_PAGE: 3,
  
  // Ad sizes that are commonly used and approved
  AD_SIZES: {
    BANNER: {
      width: 160,
      height: 600,
    },
    MEDIUM_RECTANGLE: {
      width: 300,
      height: 250,
    },
    LEADERBOARD: {
      width: 728,
      height: 90,
    },
  },
  
  // Minimum spacing between ads (in pixels)
  MIN_AD_SPACING: 100,
  
  // Minimum content length before showing ads (in words)
  MIN_CONTENT_LENGTH: 200,
  
  // Ad positions that are compliant with AdSense policies
  COMPLIANT_POSITIONS: [
    'sidebar',
    'content-top',
    'content-bottom',
    'in-content',
  ],
}; 