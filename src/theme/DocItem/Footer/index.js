import React from 'react';
import Footer from '@theme-original/DocItem/Footer';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div className="docs-license">
        <p>
          Documentation under <code>/docs</code> is licensed{' '}
          <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">
            CC BY 4.0
          </a>
          . Code samples are{' '}
          <a href="https://opensource.org/license/mit">MIT</a>. IgorBox&trade;
          trademarks and products are excluded —{' '}
          <a href="/docs/license">details</a>.
        </p>
      </div>
    </>
  );
}
