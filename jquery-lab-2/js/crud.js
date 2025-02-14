$('#add').click(function () {
  let name = $('#name').val();
  let age = $('#age').val();
  console.log(name, age);
  let row = `
        <tr>
          <td>${name}</td>
          <td>${age}</td>
          <td><button class="delete">delete</button></td>
        </tr>
  `;
  $('#persons-list tbody').append(row);
});

$('#persons-list tbody').on('click', '.delete', function () {
  $(this).parent().parent().remove();
});

$('#search').click(function () {
  let query = $('#search-item').val();

  if (query == '') {
    $('#persons-list tbody tr').show();
  }

  $('#persons-list tbody tr').filter(function () {
    $(this).toggle($(this).text().indexOf(query) > -1);
  });
});
