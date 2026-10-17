import type { MetadataRoute } from 'next';

import { baseUrl } from '@/data/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
