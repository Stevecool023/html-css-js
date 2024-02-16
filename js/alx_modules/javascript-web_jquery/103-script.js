/*
 * script that fetches and prints how to say "Hello" depending on the language
 * use this API service: 'https://www.fourtonfish.com/hellosalut/hello/'
 * language code will be the value entered in the tag 'INPUT#language_code' (ex: 'es', 'fr', 'en' etc.)
 * translation must be fetched when the user clicks on 'INPUT#btn_translate'
 * ++ OR presses 'ENTER' when the focus is on 'INPUT#language_code'
 * The translation of "Hello" must be displayed in the HTML tag 'DIV#hello'
 * can't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 *script must work when imported from the '<head>' tag
 */

// When the page has loaded
$(document).ready(function () {
  // on clicking '#btn_translate'
  $('INPUT#btn_translate').click(function() {
    const api_service = 'https://www.fourtonfish.com/hellosalut/?lang=';
    const lang_code = $('INPUT#language_code').val();
    const url = api_service + lang_code;

    // fetch json data from api
    $.getJSON(url, function(data) {
      // update the content of 'DIV#hello' to hello translation
      $('DIV#hello').text(data.hello);
    });
  });

  // On pressing enter while hovoring on '#language_code'
  $('INPUT#language_code').focus(function() {
    $(this).keydown(function (event) {
      if (event.keyCode === 13) {
        // call the initially defined click function
        $('INPUT#btn_translate').click();
      }
    });
  });
});
