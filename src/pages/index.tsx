import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/articles'); 
  }, [router]);

  return null;
};

export default HomePage;
