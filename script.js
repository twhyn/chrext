(function() {
  var quote = $('#quote');
  var author = $('#author');

  $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    type: 'GET',
    dataType: 'json',
    headers: {
      'Access-Control-Allow-Origin': ' x-requested-with'
    },
    success: function(res) {
      var qnd = res[0];
      quote.html(qnd.content);
      author.text(qnd.title);

      console.log("'" + qnd.content + "'");
    }
  });
})();