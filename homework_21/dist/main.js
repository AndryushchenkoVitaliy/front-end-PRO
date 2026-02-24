'use strict';

$(document).ready(function () {
  const modal = new bootstrap.Modal($('#taskModal')[0]);
  $('#addBtn').on('click', function () {
    const text = $('#taskInput').val().trim();
    if (!text) return;
    $('#list').append(`
        <li>
          ${text}
          <button class="delete">Видалити</button>
        </li>
      `);
    $('#taskInput').val('');
  });
  $('#list').on('click', '.delete', function (e) {
    e.stopPropagation();
    $(this).parent().remove();
  });
  $('#list').on('click', 'li', function () {
    const text = $(this).clone().children().remove().end().text().trim();
    $('#modalTaskText').text(text);
    modal.show();
  });
});