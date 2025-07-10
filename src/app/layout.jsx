import './globals.css';

export const metadata = {
  title: 'KUPals',
  description: 'Kathmandu University Social Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


