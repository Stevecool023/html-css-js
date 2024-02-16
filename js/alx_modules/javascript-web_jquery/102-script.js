// #!/usr/bin/node

/*
 * script that fetches and prints how to say "Hello" depending on the language
 * should use this API service: https://www.fourtonfish.com/hellosalut/hello/
 * The language code will be the value entered in the tag 'INPUT#language_code'
 * ++ (ex: 'es', 'fr', 'en' etc.)
 * The translation must be fetched when the user clicks on 'INPUT#btn_translate'
 * The translation of "Hello" must be displayed in the HTML tag 'DIV#hello'
 * can't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 * script must work when imported from the '<head>' tag
 */


// When the entire page is already loaded
$(document).ready(function () {

  $('INPUT#btn_translate').click(function () {
    const lang_code = $('INPUT#language_code').val();
    const url = `https://www.fourtonfish.com/hellosalut/?lang=${lang_code}`;

    // fetch translation of the specified language code
    $.getJSON(url, function (data) {

      // update the text content of 'DIV#hello' to translation of hello returned
      $('DIV#hello').text(data.hello);
    });
  });
});
