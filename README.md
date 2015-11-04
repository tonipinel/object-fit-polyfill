# Polyfill for CSS `object-fit` property

`object-fit` alows you to define the sizing mode for content images (like background-size for CSS background sources). Neither IE or Edge has support for this property but common browsers have full support. It's a very useful feature but if you want to target all users and offer a good experience you will need this polyfill.

## Browser Support & Feature Detection

This polyfill works with all browsers but uses a feature detection method to see if object-fit is supported. If it's not it will active itself.

## Installation

This polyfill is available as Bower component or via npm. Use it right away from bower:

	$ bower install --save object-fit-polyfill

or set up via npm

	$ npm install --save object-fit-polyfill


Or set up manually by grabbing the [download from GitHub](https://github.com/tonipinel/object-fit-polyfill/releases).
Then include the JavaScript file [`polyfill.object-fit.min.js`](https://github.com/anselmh/object-fit/blob/master/dist/polyfill.object-fit.min.js) at the bottom of your HTML `<body>`.
 
## Usage 

Add the data-object-fit tag to the images you need to use this css property and set any kind of object-fit value (fill,none,contain or cover)

	<img src="image.jpg" data-object-fit="cover">

You can find more sample implementations in the [examples directory](https://github.com/tonipinel/object-fit-polyfill/tree/master/examples).


## Where is the magic?

There is no magic behind this polyfill. The idea is to replace the image with a div using the actual image as background, but mantaining the actual css classes and computed styles.

## About The Webstandard

The specification for `object-fit` is to be found at [W3C CSS3 Images](http://www.w3.org/TR/css3-images/#the-object-fit). The property scales the image to fit in a certain way into a defined area, e.g:

	img {
		width: 100%; // dimensions are mandatory
		height: 35em; // dimensions are mandatory
		object-fit: cover;
		overflow: hidden; // Cuts off the parts of the image poking out
	}

Normally, the image would be stretched to the specified dimensions but due to the usage of the CSS property `object-fit: cover;` the image now is scaled proportionally, until every pixel of the defined area is covered by parts of it. In the case of cover this means that parts of the image will overlap the given area.

The following are the possible values and their implications:

- `fill` streches the image exactly to the defined dimensions which results in a distorted image. Comparable to `background-size: 100% 100%`. That's the default value.
- `none` leaves the image at its natural size and centers it inside within the defined area. If the image's natural dimensions are larger than the defined area parts of the image will poke out of it unless you also set `overflow: hidden` on it. Comparable to `background-size: auto auto; background-position: center center`.
- `contain` scales the image up or down until all of it fits into the defined area. This mode respects the image's natural aspect-ratio. It's also called "letterbox view". Comparable to `background-size: contain`.
- `cover` scales the image up or down until every pixel of the defined area is covered with parts of the image. Sort of "pan and scan view". This means that parts of the image will poke out of the defined area unless you also set `overflow: hidden` on it. This mode respects the image's natural aspect-ratio. Comparable to `background-size: cover`.

![How object-fit works](http://www.w3.org/TR/css3-images/img_scale.png)

## Author

This polyfill is written by [Toni Pinel](http://twitter.com/tonipinel).

## License

This project is under the MIT Open Source License. [See the LICENSE file](LICENSE.md) for more information.
