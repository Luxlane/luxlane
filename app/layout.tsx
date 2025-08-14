import './globals.css';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'LUX LANE Transport',
  description: 'Transporte premium con tracking en tiempo real'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{fontFamily:'ui-sans-serif, system-ui'}}>
        <Nav />
        <main style={{padding:24, maxWidth:980, margin:'0 auto'}}>{children}</main>
      </body>
    </html>
  );
}
