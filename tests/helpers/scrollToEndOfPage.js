Ember.Test.registerHelper('scrollToEndOfPage', function(app) {
  Ember.run(function() {
      $("html, body").animate({ scrollTop: $(document).height() });
  });
  return wait(app);
});
