# angular-autocrop
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Bower version](https://img.shields.io/badge/bower-1.0.0-blue.svg)


Angular auto crop image

## Quick start

### Several quick start options are available:

* [Download the latest release](https://github.com/Linko91/angular-autocrop/archive/1.0.0.zip).
* Clone the repo: `git clone https://github.com/Linko91/angular-autocrop.git`.
* Install with [Bower](http://bower.io): `bower install angular-autocrop --save`.
* Download [minified](https://raw.githubusercontent.com/Linko91/angular-autocrop/master/angular-autocrop.min.js).
* Download [un-minified](https://raw.githubusercontent.com/Linko91/angular-autocrop/master/angular-autocrop.js).
* Standalone: `curl -O https://raw.githubusercontent.com/Linko91/angular-autocrop/master/angular-autocrop.min.js`.



## Usage

### Single Example 

```html
<img id="cropped" width="250" height="250" style="width: 250px; height: 250px;"/>
<img id="original" style="position: fixed; max-width: inherit; top: 0; left: 0; z-index: -1000; width: auto; height: auto; display: none;"/>
```

```javascript
$autoCropImage.init('original', 'cropped');
```



## License
angular-autocrop is released under the [MIT license](https://raw.githubusercontent.com/Linko91/angular-autocrop/master/LICENSE). Have at it.
* * *
