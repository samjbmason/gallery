var gallery = require('./gallery.js');

var photos = [
  'http://placehold.it/350x150',
  'http://placehold.it/350x150',
  'http://placehold.it/350x150'
]

gallery.init('#gallery-root', {
  images: photos,
  auto: true
});