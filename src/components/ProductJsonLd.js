import React from 'react';
import Head from '@docusaurus/Head';

// Canonical Organization node, defined in full on www.igorbox.com (and
// referenced by the Organization block in docusaurus.config.js). Pointing
// manufacturer/seller at this @id fuses products with that single entity
// rather than declaring a separate, duplicate org per product.
const ORG_ID = 'https://www.igorbox.com/#organization';

/**
 * Emits schema.org Product structured data (JSON-LD) into the page <head>.
 * Used on each controller overview so search engines and AI systems can
 * recognize IgorBox controllers as distinct products.
 */
export default function ProductJsonLd({
  name,
  sku,
  description,
  image,
  url,
  price,
  offerUrl,
  priceCurrency = 'USD',
  availability = 'InStock',
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    sku,
    mpn: sku,
    description,
    image,
    url,
    category: 'Show control & effects controller',
    brand: {'@type': 'Brand', name: 'IgorBox'},
    manufacturer: {'@id': ORG_ID},
  };
  if (price && offerUrl) {
    data.offers = {
      '@type': 'Offer',
      url: offerUrl,
      priceCurrency,
      price,
      availability: `https://schema.org/${availability}`,
      seller: {'@id': ORG_ID},
    };
  }
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
