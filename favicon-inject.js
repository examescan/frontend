(function() {
  const base = '/'; // troque por '/nome-do-repo/' se necessário

  const favicons = [
    { rel: 'icon',              type: 'image/x-icon',  href: base + 'favicon.ico' },
    { rel: 'icon',              type: 'image/png',     sizes: '16x16',  href: base + 'favicon-16x16.png' },
    { rel: 'icon',              type: 'image/png',     sizes: '32x32',  href: base + 'favicon-32x32.png' },
    { rel: 'apple-touch-icon',  type: 'image/png',     sizes: '180x180', href: base + 'apple-touch-icon.png' },
    { rel: 'manifest',          href: base + 'site.webmanifest' },
  ];

  favicons.forEach(function({ rel, type, sizes, href }) {
    const link = document.createElement('link');
    link.rel  = rel;
    link.href = href;
    if (type)  link.type  = type;
    if (sizes) link.sizes = sizes;
    document.head.appendChild(link);
  });
})();
