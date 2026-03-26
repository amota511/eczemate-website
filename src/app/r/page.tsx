'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/us/app/eczemate-eczema-care/id6740091498';

function RedirectContent() {
  const searchParams = useSearchParams();
  useEffect(() => {
    window.location.href = APP_STORE_URL;
  }, []);
  return null;
}

export default function ReferralRedirect() {
  return (
    <Suspense fallback={null}>
      <RedirectContent />
    </Suspense>
  );
}
