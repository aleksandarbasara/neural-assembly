import Head from 'next/head';

export default function SEO({ title, description, canonicalUrl, structuredData }) {
  const jsonLd = structuredData
    ? JSON.stringify(structuredData).replace(/[<>&]/g, (character) => {
        const escapes = { '<': '\\u003c', '>': '\\u003e', '&': '\\u0026' };
        return escapes[character];
      })
    : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {jsonLd && (
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </Head>
  );
}
