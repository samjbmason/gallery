'use strict';

var $ = require('jquery');

var gallery = module.exports = {};


var innerContainerWidth = 0;
var numberOfSlides = 0;

gallery.options = {
  images: [],
  auto: true,
  nav: true
}

gallery.init = function(container, args) {
  $.extend(this.options, args)

  this.buildHTML(container)
  this.createSlides()
  this.calcSize()
};



gallery.buildHTML = function galleryBuildHTML(container) {
  var $container = $(container);

  $container.addClass('gallery__root');

  var $galleryInner = $('<div />')
    .addClass('gallery__inner')
    .appendTo(container);

  $('<button />')
  .addClass('gallery__nav--prev')
  .appendTo(container);

  $('<button />')
  .addClass('gallery__nav--next')
  .appendTo(container);


}


gallery.nav = function() {

}

gallery.calcSize = function() {
  console.log($slideWidths)
}



gallery.createSlides = function galleryCreateSlides() {

  var $slides = $(this.options.images)

  numberOfSlides = $slides.length

  $.each($slides, function () {

    var slide = $('<div />')
      .addClass('gallery__slide')
      .append($('<img />', {
        src: this
      }))
      .appendTo('.gallery__inner')

    innerContainerWidth += slide.width()
  });
}
