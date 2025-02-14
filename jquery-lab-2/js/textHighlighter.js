$.fn.TextHighlighter = function (searchText, highlightColor) {
  if (!searchText) return this;

  const regex = new RegExp(`(${searchText})`, 'gi'); // Case-insensitive match

  this.each(function () {
    const originalText = $(this).html();

    // Replace matched text with highlighted span
    const highlightedText = originalText.replace(regex, function (match) {
      return `<span class="highlight" style="color: ${highlightColor};">${match}</span>`;
    });

    $(this).html(highlightedText); // Update element HTML
  });

  return this; // Enable chaining
};

$('#highlight-button').click(function () {
  const text = $('#text-to-highlight').val();
  const color = $('#highlight-color').val();
  $('#sample-text').TextHighlighter(text, color);
});
