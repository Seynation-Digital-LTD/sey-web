import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'breadcrumb' | 'service';
  data?: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: Record<string, unknown> = {};

  switch (type) {
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Seynation Digital',
        alternateName: 'Seynation',
        url: 'https://seynation.co',
        logo: 'https://seynation.co/logo.png',
        description: 'The Mastermind Agency - Experts in Digital Marketing, Social Media Management, Website Design & Development, Graphics Design, and Brand Strategy.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dar es Salaam',
          addressCountry: 'TZ',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+255-XXX-XXX-XXX',
          contactType: 'Customer Service',
          email: 'hello@seynation.co',
          availableLanguage: ['en', 'sw'],
        },
        sameAs: [
          'https://www.facebook.com/seynation',
          'https://www.instagram.com/seynation',
          'https://twitter.com/seynation',
          'https://www.linkedin.com/company/seynation',
        ],
        ...data,
      };
      break;

    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Seynation Digital',
        url: 'https://seynation.co',
        description: 'The Mastermind Agency shaping tomorrow\'s digital world today.',
        publisher: {
          '@type': 'Organization',
          name: 'Seynation Digital',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://seynation.co/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        ...data,
      };
      break;

    case 'service':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Digital Services',
        provider: {
          '@type': 'Organization',
          name: 'Seynation Digital',
          url: 'https://seynation.co',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Tanzania',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website Design & Development',
                description: 'Custom website design and development services',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Marketing',
                description: 'Comprehensive digital marketing and SEO services',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Social Media Management',
                description: 'Professional social media management and content creation',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Graphics Design & Branding',
                description: 'Creative graphics design and brand identity services',
              },
            },
          ],
        },
        ...data,
      };
      break;

    case 'breadcrumb':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        ...data,
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
