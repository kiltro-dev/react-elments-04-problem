import React from 'react';
import './style.css';

const saleOpen = {
  heading: 'Get 25% off during our one-time sale',
  description:
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  href: '/one-time-sale',
};

const saleClosed = {
  heading: 'Oops, you just missed out on our big sale!',
  description: 'Now everything you like is back at full price. Sorry!',
};

export default function Callout() {
  const isSaleOpen = true;

  return (
    <section className="section">
      <div className="section-wrapper">
        <h2 className="section-heading">{saleOpen.heading}</h2>
        <p className="section-description">{saleOpen.description}</p>
        <a href={saleOpen.href} className="section-link">
          Get access to our one-time sale
        </a>
      </div>
    </section>
  );
}
