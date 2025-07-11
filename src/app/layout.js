import './globals.css';
import PropTypes from 'prop-types';

export const metadata = {
  title: 'Amjad Majed - MERN Stack Developer',
  description:
    'An aspirant developer, who believes in continuous improvement! Portfolio of Amjad Majed.',
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
