import React from 'react';
import Head from '@docusaurus/Head';

/**
 * Emits schema.org Product structured data (JSON-LD) into the page <head>.
 * Used on each controller overview so search engines and AI systems can
 * recognize IgorBox controllers as distinct products.
 */
export default function ProductJsonLd({name, sku, description, image, url}) {
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
    manufacturer: {'@type': 'Organization', name: 'Rising Orchards, LLC'},
  };
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
