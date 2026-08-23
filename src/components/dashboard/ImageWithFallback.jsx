import { useState } from 'react';

// <img> that swaps to a simple placeholder if the source fails to load,
// instead of showing the browser's broken-image icon.
function ImageWithFallback({ src, alt, className = '' }) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt || 'Image unavailable'}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setErrored(true)} />;
}

export default ImageWithFallback;
