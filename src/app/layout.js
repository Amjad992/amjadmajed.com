import './globals.css';
import PropTypes from 'prop-types';

export const metadata = {
  title: 'Amjad Majed',
  description:
    'I help business transform with technology. I lead the team of Desol Int. where we work with clients to build innovative solutions that drive success.',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
