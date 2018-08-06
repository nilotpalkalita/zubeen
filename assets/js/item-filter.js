

jQuery(document).ready(function() {

  "use strict";


  /*-------------------------- Portfolio Item 2 Filter -----------------------*/

  var $shopItems = $('#shop-items'),
  colWidth = function () {
    var w = $shopItems.width(), 
    columnNum = 1,
    columnWidth = 0;
    if (w > 960) {
      columnNum  = 4;
    } 
    else if (w > 640) {
      columnNum  = 3;
    } 
    else if (w > 480) {
      columnNum  = 2;
    }  
    else if (w > 360) {
      columnNum  = 1;
    } 
    columnWidth = Math.floor(w/columnNum);
    $shopItems.find('.item').each(function() {
      var $item = $(this),
      multiplier_w = $item.attr('class').match(/item-w(\d)/),
      multiplier_h = $item.attr('class').match(/item-h(\d)/),
      width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
      height = multiplier_h ? columnWidth*multiplier_h[1]*.7-10 : columnWidth*1.1-10;
      $item.css({
        width: width,
        height: height
      });
    });
    return columnWidth;
  },
  isotope = function () {
    $shopItems.isotope({
      resizable: true,
      itemSelector: '.item',
      masonry: {
        columnWidth: colWidth(),
        gutterWidth: 10
      }
    });
  };
  isotope();
  $(window).smartresize(isotope);

  $('.itemFilter a').click(function(){
    $('.itemFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $shopItems.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  }); 

});