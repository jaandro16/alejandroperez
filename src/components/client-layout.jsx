'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingParticles from '@/components/floating-particles';
import LoadingScreen from '@/components/loading-screen';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function ClientLayout({ children }) {
  const [showLoader, setShowLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Cambiar a true por defecto
  const pathname = usePathname();

  useEffect(() => {
    // Solo mostrar el loader en la página de inicio
    const isHomePage = pathname === '/';

    if (isHomePage) {
      // Marcar que hemos navegado internamente
      const hasNavigatedInternally =
        sessionStorage.getItem('internalNavigation');

      if (!hasNavigatedInternally) {
        // Es la primera visita o una recarga real
        setShowLoader(true);
        setIsVisible(false);
      }
    }

    // Marcar que cualquier navegación posterior es interna
    sessionStorage.setItem('internalNavigation', 'true');
  }, [pathname]);

  const handleLoadingComplete = () => {
    setShowLoader(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  // Reset del flag cuando se cierra la pestaña/ventana
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('internalNavigation');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (showLoader) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div
      className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FloatingParticles />
        <Navbar />
        <main className='flex-1 pt-16 relative z-10'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
