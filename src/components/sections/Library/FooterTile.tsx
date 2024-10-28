// FooterTile.tsx
import React from 'react';
import './FooterTile.scss';

interface FooterTileProps {
  title: string;
  links: string[];
}

const FooterTile: React.FC<FooterTileProps> = ({ title, links }) => {
  return (
    <div className="footer-tile getBiggerOnhover">
      <h2 className="footer-tile__title">{title}</h2>
      <nav>
        <ul className="footer-tile__links">
          {links.map((link, index) => (
            <li key={index} className="footer-tile__link-item">
              <a href="#" className="footer-tile__link">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterTile;