function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mainTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];

      if (Number(x.innerHTML) > Number(y.innerHTML)) {

        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  console.log("sort is runnning")
}





$(document).ready(function() {

  function remove() {
    $(".remove").click(function() {
      $(this).parent().parent().remove();
      console.log("remove function is running");
    });
  }
  $('#add-button').click(function() {
    let nameVal = $('#name-enter').val();
    let startVal = $('#start-enter').val();
    let endVal = $('#end-enter').val();
    let fifteenVal = $('#fifteen-enter').val();
    let thirtyVal = $('#thirty-enter').val();
    let newRow = "<tr> <td colspan='5'>" + nameVal + "</td>" +
      "<td colspan='5'>" + startVal + "</td>" +
      "<td colspan='5'>" + fifteenVal + "</td>" +
      "<td colspan='5'>" + thirtyVal + "</td>" +
      "<td colspan='5'>" + endVal + "</td>" +
      '<td colspan="1" class="toprow"><button class="remove">-</button> </td></tr>';
    $('#mainTable').append(newRow);

    function remove() {
      $(".remove").click(function() {
        $(this).parent().parent().remove();
        console.log("remove function is running");
      });
    }
    remove();
  });
  console.log("doc ready is running");
  remove();
});
