import Ember from 'ember';
import layout from '../templates/components/image-drop';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ember-image-drop'],
  attributeBindings: ['style'],
  placeholder: "",
  helpText: "Drop your image here, or click to select",
  hideTextOnImage: true,

  image: null,
  file: null,

  textStyle: Ember.computed('image', function() {
    let textStyle = "";
    if (this.get('hideTextOnImage') && this.get('image')) {
      textStyle = "display: none;";
    }
    return Ember.String.htmlSafe(textStyle);
  }),

  style: Ember.computed('image', function() {
    let backgroundStyle = "";
    if (this.get('image')) {
      backgroundStyle =  `background-image: url(${this.get('image')});`;
    }

    return Ember.String.htmlSafe(backgroundStyle);
  }),

  setup: Ember.on('willInsertElement', function() {
    const $input = this.$('input');
    $input.on('change', (event) => {
      this.handleFileDrop(event.target.files[0]);
    });
  }),

  handleFileDrop(file) {
    this.set('file', file);
    var reader = new FileReader();
    reader.onload = (e) => {
      var fileToUpload = e.target.result;
      Ember.run(() => {
        this.set('image', fileToUpload);
      });
    };
    reader.readAsDataURL(file);
  },

  noopHandler(event) {
    event.stopPropagation();
    event.preventDefault();
  },

  drop(event) {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      return this.handleFileDrop(event.dataTransfer.files[0]);
    }

    let imageUrl = event.dataTransfer.getData('URL');

    if (!imageUrl) {
      return;
    }

    this.convertImgToBase64URL(imageUrl, (base64) => {
      this.set('image', base64);
    });
  },

  convertImgToBase64URL(url, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'), dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
    };
    img.src = url;
  }
});
