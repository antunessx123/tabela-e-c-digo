function insertData() {
    var name = document.getElementById('name').value;
    var quarter1 = parseFloat(document.getElementById('quarter1').value);
    var quarter2 = parseFloat(document.getElementById('quarter2').value);
    var quarter3 = parseFloat(document.getElementById('quarter3').value);
  
    var average = (quarter1 + quarter2 + quarter3) / 3;
  
    var situation = average >= 6 ? 'Aprovado' : 'Reprovado';
  
    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cells = [];
  
    for (var i = 0; i < 6; i++) {
      cells[i] = newRow.insertCell(i);
    }
  
    cells[0].innerHTML = name;
    cells[1].innerHTML = quarter1;
    cells[2].innerHTML = quarter2;
    cells[3].innerHTML = quarter3;
    cells[4].innerHTML = average.toFixed(2);
    cells[5].innerHTML = situation;
  
    document.getElementById('name').value = '';
    document.getElementById('quarter1').value = '';
    document.getElementById('quarter2').value = '';
    document.getElementById('quarter3').value = '';
  }