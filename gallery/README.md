# HIP.JS GALLERY EXTENSION
This is an extension to create a gallery layout where images are shown in responsive way and users can download the original images. This gallery is without lightbox viewer! 

## USAGE
### Link Library
```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/llxx-lord-xxll/html-item-pagination/lib/hip.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/llxx-lord-xxll/html-item-pagination/gallery/hip-gallery.js"></script>
```
### HTML
  ```html
<div id="html-item-pagination"></div>
```

```html
 <script>
   $("#html-item-pagination").hipgallery({
                images:[
                  {thumbnail:"https://www.w3schools.com/css/img_5terre.jpg",download:"http://localhost:63342/html-item-pagination/gallery/hip-gallery.js",title:"Title 1"},
                  {thumbnail:"https://res.cloudinary.com/llxx-lord-xxll/image/upload/v1574253844/hip/hip_h31zgf.png",download:"http://localhost:63342/html-item-pagination/gallery/hip-gallery.js",title:"Title 2"},
                  {thumbnail:"https://res.cloudinary.com/llxx-lord-xxll/image/upload/v1574253844/hip/hip_h31zgf.png",download:"http://localhost:63342/html-item-pagination/gallery/hip-gallery.js",title:"Title 3"},
                  {thumbnail:"https://www.w3schools.com/css/img_5terre.jpg",download:"http://localhost:63342/html-item-pagination/gallery/hip-gallery.js",title:"Title 4"},
                  {thumbnail:"https://res.cloudinary.com/llxx-lord-xxll/image/upload/v1574253844/hip/hip_h31zgf.png",download:"http://localhost:63342/html-item-pagination/gallery/hip-gallery.js",title:"Title 5"},
                  {thumbnail:"https://www.w3schools.com/css/img_5terre.jpg",download:"http://localhost:63342/html-item-pagination/gallery/hip-gallery.js",title:"Title 6"},
                 ]}
      );
 </script>
```
### Advancing into parameters
It supports all the parameters that are described in [HIP.JS](https://github.com/llxx-lord-xxll/html-item-pagination).

Only a new parameter (images) as array of image block element has been added for adding the gallery images. 

The arrangement of the parameter is shown below : 

```
images : [
            {
             thumbnail:'',
             download:'',
             title: ''
             },
             {
              thumbnail:'',
              download:'',
              title: ''
              },
              {
               thumbnail:'',
               download:'',
               title: ''
               },
             {
              thumbnail:'',
              download:'',
              title: ''
              }
                ...
]
```

Here,

Paremeter | Description
------------ | -------------
thumbnail | Required, Thumbnail image url to show
download | Optional parameter for downloading or navigating to the url. Must be on the same domain name for most of the modern browsers. If not provided then, thumbnail image url will be used by default.
title | The title of the image.

## Screenshot
![HIP SCREENSHOT](https://res.cloudinary.com/llxx-lord-xxll/image/upload/v1575366360/hip/hip-gallery_zxftly.png)
