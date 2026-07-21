import React from 'react';
import Head from '@docusaurus/Head';
import Content from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

const DEFAULT_NOTE =
  'This page covers hardware that is in beta testing. Details can change ' +
  'before release, and your firmware may be ahead of or behind these docs.';

export default function ContentWrapper(props) {
  const {frontMatter} = useDoc();
  const beta = frontMatter.beta;

  if (!beta) {
    return <Content {...props} />;
  }

  const note = typeof beta === 'string' ? beta : DEFAULT_NOTE;

  return (
    <>
      {/* Keep beta pages out of search engines until the beta flag is removed. */}
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="docs-beta-banner" role="note">
        <span className="docs-beta-badge">Beta</span>{' '}
        <span className="docs-beta-note">{note}</span>
      </div>
      <Content {...props} />
    </>
  );
}
