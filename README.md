# lazy-out.js

[🤦‍♀️ See Demo 🤦‍♀️](https://kurogedelic.github.io/lazy-out.js/)


Rewrite "src" attributes of img element by scroll event. 
You write **"lazy" image URL** and **original image URL** in **data   attribute** of the img element. 
You need jQuery 3 + to run this script.

This script was created to easily implement Lazy-Load with Wordpress.

## Hot to use 🤧

At first, read jQuery and lazy-load just before the end of <body> tag.
A jQuery version of 3 or higher is recommended.
  
```html
<script src="jquery.js"></script>
<script src="lazy-out.js"></script>
```

or CDN

```html
<script src="https://cdn.rawgit.com/kurogedelic/lazy-out.js/36bebd03/dist/lazy-out.min.js"></script>
```

Next, write the necessary items in the data attribute of `<img>`.

`data-orig-file` URL of the original-image
`data-lazy-src` URL of the Lazy-image
`data-orig-size` size of the original-image

> `data-orig-size` will work without filling in.
> In this case, it is displayed in the size of the image to be read at the beginning.


```html
<img 
class="lazy"
data-orig-file="img/photo-original.jpg"
data-orig-size="1200,588"
data-lazy-src="img/photo-lazy.jpg" >
```

### Working

When the page loads it looks like this in DOM,

```html
<img class="lazy" src="img/photo-lazy.jpg" width="1200" height="588">
```
> If `src` is specified for` <img> `it will be deleted.

When img scrolls to the threshold-level,

```html
<img class="lazy-done" src="img/photo-original.jpg" width="1200" height="588">
```

## Setting 🤧
JSON for setting is written at the head of lazy-load.js.

Name | Type | Default | Description
------ | ---- | ------- | -----------
"lazySrc" | string | lazy-src | data attribute name of Lazy image URL
"originalSrc" | string | orig-file | data attribute name of original image URL
"originalSize" | string | orig-size | data attribute name of priginal image size
"threshold" | numeric | 300 | threshold level from page-top

## In Wordpress use 🤧

For images in articles, data attributes are automatically written by using "Lazy Load" of "Jetpack".

On other pages (eg article list loop) you can implement URL by writing it to data attributes, by PHP.

Example;

````php
<img 
class="lazy"
data-orig-file="<? echo get_the_post_thumbnail_url(get_the_ID(), 'large'); ?>"
data-lazy-src="<? echo get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'); ?>" >
````

> With `wp_get_attachment_image_src` you can also get the thumbnail size for` data-orig-size`.


## Impressions 🙇
I am amateur with regard to JS.
Please tell me if there is a better way.
Also, I am bad at English

thank you
❤️
