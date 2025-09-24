/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://seynation.co',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  generateIndexSitemap: true,
  autoLastmod: true, 
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}
