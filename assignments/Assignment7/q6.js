const searchBox = document.getElementById("searchBox");
const studentRows = document.querySelectorAll("#studentTable tbody tr:not(#noResults)");
const noResultsRow = document.getElementById("noResults");

searchBox.addEventListener("input", () => {
  const searchText = searchBox.value.trim().toLowerCase();
  let visibleCount = 0;

  studentRows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const isMatch = rowText.includes(searchText);
    row.style.display = isMatch ? "" : "none";
    if (isMatch) {
      visibleCount++;
    }
  });

  noResultsRow.style.display = visibleCount === 0 ? "table-row" : "none";
  console.log(`Search "${searchText}": ${visibleCount} match(es)`);
});
