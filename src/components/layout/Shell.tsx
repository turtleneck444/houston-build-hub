import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface ShellProps {
  children: ReactNode;
  hideFooter?: boolean;
}

export const Shell = ({ children, hideFooter = false }: ShellProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};