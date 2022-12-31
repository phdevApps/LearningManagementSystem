$(document).ready(function () {



  $('.grid').sortable();

  var xWidth = 160;
  var yHeight = 160;

  var masonryOptions = {
      itemSelector: '.grid-item',
      columnWidth: xWidth
  }
  var $grid = $('.grid').masonry(masonryOptions);

  $('.grid-item').resizable({
      animateDuration: "fast",
      start: function (event, ui) {
          $(this).css('z-index', '2222');

      },
      stop: function (event, ui) {

          $grid.masonry('destroy'); // destroy
          var el = $(this);
          var classes = el.attr('class').split(' ');

          var clsWidthPatt = "grid-item--width";
          var clsHeightPatt = "grid-item--height";

          var widthClassRegex = new RegExp(clsWidthPatt);
          var heightClassRegex = new RegExp(clsHeightPatt);

          if (classes.length) {
              widthClass = classes.filter(function (cls) {
                  return widthClassRegex.test(cls);
              });

              heightClass = classes.filter(function (cls) {
                  return heightClassRegex.test(cls);
              });

              // check for width
              if (widthClass.length) {
                  widthNumber = parseInt(widthClass[0].substr(clsWidthPatt.length, 3));

                  widthNumber = (ui.size.width / xWidth).toFixed(0);
                  el.removeClass(widthClass[0]);
                  el.addClass(clsWidthPatt + '' + widthNumber);

              } else {
                  el.addClass(clsWidthPatt + '1');
              }

              // check for height
              if (heightClass.length) {
                  heightNumber = (ui.size.height / yHeight).toFixed(0);
                  el.removeClass(heightClass[0]);
                  el.addClass(clsHeightPatt + '' + heightNumber);
              } else {
                  el.addClass(clsHeightPatt + '1');
              }

          }



          el.css('z-index', '');
          el.css('width', '');
          el.css('height', '');
          $grid.masonry(masonryOptions);
      }

  });



  $('.grid').sortable({
      start: function (event, ui) {
          console.log(ui);
          ui.item.removeClass('grid-item');
          $grid.masonry('reloadItems');
          $grid.masonry('destroy'); // destroy
          $grid.masonry(masonryOptions);
      },
      change: function (event, ui) {
          $grid.masonry('reloadItems');
          $grid.masonry('destroy'); // destroy
          $grid.masonry(masonryOptions);
      },
      stop: function (event, ui) {
          ui.item.addClass('grid-item');
          $grid.masonry('reloadItems');
          $grid.masonry('destroy'); // destroy
          $grid.masonry(masonryOptions);
      }
  });

  //   $('#dd').on('click', function() {
  //     elems = $grid.masonry('getItemElements')
  //     console.log(elems)

  //   });
});