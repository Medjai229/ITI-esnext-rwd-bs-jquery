// * Task 1

$('.container1').append('<div class="black"></div>');

$('.container1').prepend('<div class="white"></div>');

$('.pink').before('<p class="yellow"></p>');

// * Task 2

let links = [];

$('.container2 p').each(function (index) {
  links.push($(this).text());
  $(this).replaceWith(`<a href="${links[index]}">${links[index]}</a>`);
});

// * Task 3

$('.container3 img').wrap('<figure>');
$('.container3 figure').append('<figcaption>Coffee</figcaption>');

// * Task 4

$('.container4 .col-age').text('');

$('.container4 td:contains("mohsen")').addClass('man');

$('.container4 td').toggleClass('your-email');

// * Task 5 (Bouns)

let i = $('li').filter(function (index) {
  return index % 3 === 0;
});

console.log(i);

$('ul').html(i);

// * Task 6

$('.container6 input[name="username"]').val('Malik');
$('.container6 input[type="checkbox"]').prop('checked', true);
