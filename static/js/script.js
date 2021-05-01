$(document).ready(function () {
  $(".sidenav").sidenav({edge: "right"});
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip();
  $(".datepicker").datepicker({
    // 
      format: "dd mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      // own object. Internationalization and localization
      i18n: {
          done: "Select"
      }
  });
});