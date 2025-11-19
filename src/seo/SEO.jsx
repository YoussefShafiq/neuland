import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const joinUrl = (base, path) => {
  if (!base) return path || '/';
  try {
    const u = new URL(path || '/', base);
    return u.toString();
  } catch {
    return `${base?.replace(/\/$/, '')}${path?.startsWith('/') ? '' : '/'}${path || ''}`;
  }
};

export function DefaultSEO({
  siteName = 'Portfolio',
  defaultTitle = 'Youssef Shafek — Portfolio',
  titleTemplate = '%s | Youssef Shafek',
  description = 'Frontend developer building performant, accessible web apps with React and Tailwind.',
  keywords = 'Youssef Shafek, frontend developer, React, Tailwind, portfolio',
  twitterHandle = '@',
  siteUrl,
  image = '/profile.jpg',
}) {
  const { pathname } = useLocation();
  const origin = typeof window !== 'undefined' ? window.location.origin : siteUrl;
  const canonical = joinUrl(origin, pathname);
  const ogImage = image?.startsWith('http') ? image : joinUrl(origin, image);

  return (
    <Helmet defaultTitle={defaultTitle} titleTemplate={titleTemplate}>
      <html lang="en" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#2563eb" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Youssef Shafek',
          url: origin || siteUrl,
          sameAs: [],
          image: ogImage,
          jobTitle: 'Frontend Developer',
        })}
      </script>
    </Helmet>
  );
}

export function PageSEO({ title, description, image = '/profile.jpg', siteName = 'Portfolio' }) {
  const { pathname } = useLocation();
  const origin = typeof window !== 'undefined' ? window.location.origin : undefined;
  const canonical = joinUrl(origin, pathname);
  const ogImage = image?.startsWith('http') ? image : joinUrl(origin, image);

  return (
    <Helmet title={title}>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

export function NoIndex() {
  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
}
