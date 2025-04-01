import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
}

export default function SEO({
  title,
  description,
  canonical = 'https://trainllm.magnatesempire.com',
  type = 'website',
  name = 'TrainLLM',
  image = 'https://trainllm.magnatesempire.com/og-image.jpg',
}: SEOProps) {
  const siteTitle = `${title} | ${name}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebSite',
          name: siteTitle,
          description,
          url: canonical,
          image,
          publisher: {
            '@type': 'Organization',
            name: 'TrainLLM',
            logo: {
              '@type': 'ImageObject',
              url: 'https://trainllm.magnatesempire.comlogo.png'
            }
          }
        })}
      </script>
    </Helmet>
  );
}