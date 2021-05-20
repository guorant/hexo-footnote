var renderFootnotes = require('./src/footnotes');
    util = require('hexo-util');

var hexo = hexo || {};
var config = hexo.config || {};
var footnoteConfig = config.footnote || {};

// Register footnotes filter
hexo.extend.filter.register('before_post_render', function(data) {
  data.content = renderFootnotes(data.content, footnoteConfig);
  return data;
});

// Add CDN CSS resources
hexo.extend.filter.register('after_post_render', function(data) {
  data.content =
      util.htmlTag('link', {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/hint.css/2.4.1/hint.min.css'}) +
      data.content;
  return data;
});