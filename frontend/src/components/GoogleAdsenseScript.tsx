import Script from 'next/script';

export const GoogleAdsenseScript = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}; 