# hexo-footnote
[![npm version](https://img.shields.io/npm/v/hexo-footnote.svg?)](https://www.npmjs.com/package/hexo-footnote) [![travis build status](https://img.shields.io/travis/guorant/hexo-footnote/master.svg?)](https://travis-ci.org/guorant/hexo-footnote) [![Coverage Status](https://coveralls.io/repos/github/guorant/hexo-footnote/badge.svg?branch=master)](https://coveralls.io/github/guorant/hexo-footnote?branch=master) [![npm dependencies](https://img.shields.io/david/guorant/hexo-footnote.svg?)](https://david-dm.org/guorant/hexo-footnote#info=dependencies&view=table) [![npm dev dependencies](https://img.shields.io/david/dev/guorant/hexo-footnote.svg?)](https://david-dm.org/guorant/hexo-footnote#info=devDependencies&view=table)

A plugin to support markdown footnotes and Wiki-Style tooltip reference in your Hexo blog posts.

## Installation

```
npm install hexo-footnote --save
```

If Hexo detect automatically all plugins, that's all.  

If that is not the case, register the plugin in your `_config.yml` file :
```
plugins:
  - hexo-footnote
```

## Configuration

```
footnote:
  location_target_class: location-target
```

## Syntax

### Mardown
```
basic footnote[^1]
here is an inline footnote[^2](inline footnote)
and another one[^3]
and another one[^demo]

[^1]: basic footnote content
[^3]: paragraph
footnote
content
[^demo]: footnote content with some [markdown](https://en.wikipedia.org/wiki/Markdown)
```

See [Demo](http://kchen.cc/2016/11/10/footnotes-in-hexo/) here.

### Output
![footnotes](http://data.kchen.cc/mac_qrsync/71e694ce6f0052b83f7af81cfa7ccc64.png-960.jpg)