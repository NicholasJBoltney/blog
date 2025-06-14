import Script from 'next/script';

export const GoogleAdsenseScript = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR-AD-CLIENT-ID"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}; 