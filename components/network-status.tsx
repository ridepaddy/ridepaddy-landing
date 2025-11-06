'use client';

import { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateFavicon = (isOnline: boolean) => {
      // Remove existing favicon
      const existingFavicon = document.querySelector("link[rel='icon']");
      if (existingFavicon) {
        existingFavicon.remove();
      }

      // Create new favicon element
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/svg+xml';

      if (isOnline) {
        // Online - use green logo
        newFavicon.href = '/images/brand/Green-Logo-Icon.svg';
      } else {
        // Offline - use red WifiOff icon
        const offlineSvg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="2" y1="2" x2="22" y2="22" stroke="#ef4444" stroke-width="2"></line>
            <path d="M8.5 16.5a5 5 0 0 1 7 0" stroke="#ef4444"></path>
            <path d="M2 8.82a15 15 0 0 1 4.17-2.65" stroke="#ef4444"></path>
            <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" stroke="#ef4444"></path>
            <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" stroke="#ef4444"></path>
            <path d="M5 13a10 10 0 0 1 5.24-2.76" stroke="#ef4444"></path>
            <circle cx="12" cy="20" r="1" fill="#ef4444" stroke="#ef4444"></circle>
          </svg>
        `.trim();
        newFavicon.href = `data:image/svg+xml,${encodeURIComponent(offlineSvg)}`;
      }

      // Append to head
      document.head.appendChild(newFavicon);
    };

    const updateOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);
      updateFavicon(online);
    };

    // Set initial status
    updateOnlineStatus();

    // Listen for online/offline events
    globalThis.addEventListener('online', updateOnlineStatus);
    globalThis.addEventListener('offline', updateOnlineStatus);

    return () => {
      globalThis.removeEventListener('online', updateOnlineStatus);
      globalThis.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  // Show notification when offline
  if (!isOnline) {
    return (
      <div className='fixed top-0 left-0 right-0 bg-destructive text-white py-2 px-4 text-center z-50 flex items-center justify-center gap-2'>
        <WifiOff className='h-4 w-4' />
        <span className='text-sm font-body'>No internet connection</span>
      </div>
    );
  }

  return null;
}
