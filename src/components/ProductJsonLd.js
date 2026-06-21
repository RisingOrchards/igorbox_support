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
  // Canonical Organization node (defined site-wide in docusaurus.config.js and
  // mirrored on www.igorbox.com). Reference it by @id so brand/manufacturer/
  // seller all resolve to the one IgorBox entity instead of loose duplicates.
  const ORGANIZATION_ID = 'https://www.igorbox.com/#organization';
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
<<<<<<< Updated upstream
    brand: {'@type': 'Brand', name: 'IgorBox'},
    manufacturer: {'@id': ORG_ID},
=======
    brand: {'@id': ORGANIZATION_ID},
    manufacturer: {'@id': ORGANIZATION_ID},
>>>>>>> Stashed changes
  };
  if (price && offerUrl) {
    data.offers = {
      '@type': 'Offer',
      url: offerUrl,
      priceCurrency,
      price,
      availability: `https://schema.org/${availability}`,
<<<<<<< Updated upstream
      seller: {'@id': ORG_ID},
=======
      seller: {'@id': ORGANIZATION_ID},
>>>>>>> Stashed changes
    };
  }
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
