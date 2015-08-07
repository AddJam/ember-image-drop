[![npm version](https://badge.fury.io/js/ember-image-drop.svg)](http://badge.fury.io/js/ember-image-drop)
[![Travis CI](https://travis-ci.org/AddJam/ember-image-drop.svg)](https://travis-ci.org/AddJam/ember-image-drop)

# ember-image-drop

A place to drop images. Gives you the image data as base64. You can also
click to open the file picker as normal.

![ember-image-drop preview](https://s3.amazonaws.com/f.cl.ly/items/2L2j0h1a0s3p3D3n3W2X/Screen%20Recording%202015-08-07%20at%2010.55%20am.gif)

## Installation

`ember install ember-image-drop`

## Usage

```
{{image-drop image=companyLogo
             placeholder="Company Logo"
             helpText="Drop your image here, or click to select"}}
```

In this example, `companyLogo` will be updated with the base64 image data when
an image is selected.

You should also update your Content Security Policy (usually in
`config/environment.js`) to allow base64 image data to be the displayed.

```
  ENV.contentSecurityPolicy = {
    'img-src': "'self' data:"
  };
```

### Options

Option Name      | Description                                         | Default Value
-----------------|-----------------------------------------------------|---------------
image            | Where we should bind the base64 data.               | `null`
placeholder      | The large text shown in the drop area.              | `""`
helpText         | The smaller text shown below the placeholder.       | `"Drop your image here, or click to select"`
hideTextOnImage  | Should we hide the text when an image is present?   | `true`


## License

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
