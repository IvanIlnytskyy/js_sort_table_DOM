'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((header, columnIndex) => {
    header.addEventListener('click', function () {
      const rows = Array.from(table.querySelectorAll('tbody tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[columnIndex].textContent.trim();
        const cellB = rowB.children[columnIndex].textContent.trim();

        const a = isNaN(cellA) ? cellA : parseFloat(cellA);
        const b = isNaN(cellB) ? cellB : parseFloat(cellB);

        return a > b ? 1 : a < b ? -1 : 0;
      });

      const tbody = table.querySelector('tbody');

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
