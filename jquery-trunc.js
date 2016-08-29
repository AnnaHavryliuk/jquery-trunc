(function ($) {
  var hiddenText = [];
  
  $.fn.trunc = function (limit) {
    limit = parseInt(limit);

    if (!isNaN(limit)) {
      var allText = []
        , visibleText = [];

      this.each(function(index, item) {
        item = $(item);
        var $hellip = item.find('span.hellip');

        if ($hellip.length) {
          $hellip.after(hiddenText[index]);
        }

        $hellip.remove();

        allText[index] = item.html().trim();
        visibleText[index] = allText[index].slice(0, limit);
        item.html(visibleText[index]);

        $hellip = $('<span class="hellip"> &hellip;</span>');
        item.append($hellip);

        $hellip.on('click', function () {

          $(this).find('span.invisible').remove();
          $(this).addClass('invisible');
          $(this).after(hiddenText[index]);
          hiddenText[index] = null;
        });

        hiddenText[index] = allText[index].slice(limit);
      });
    }
    return this;
  }
})(jQuery);