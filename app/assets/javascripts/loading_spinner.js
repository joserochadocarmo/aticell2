this.PageSpinner = {
  spin: function(ms) {
    var _this = this;
    if (ms == null) {
      ms = 500;
    }
    this.spinner = setTimeout((function() {
      return _this.add_spinner();
    }), ms);
    return $(document).on('page:change', function() {
      return _this.remove_spinner();
    });
  },
  spinner_html: '\
    <div style="position: fixed; right: 20px; bottom: 20px; z-index: 100000;" id="loading" class="label label-warning">Loading...</div>
    \
  ',
  spinner: null,
  add_spinner: function() {
    $('body').append(this.spinner_html);
    return $('body div#title_bar').show();
  },
  remove_spinner: function() {
    clearTimeout(this.spinner);
    $('div#page-spinner').modal('hide');
    return $('div#page-spinner').on('hidden', function() {
      return $(this).remove();
    });
  }
};

$(document).on('page:fetch', function() {
  return PageSpinner.spin();
});
