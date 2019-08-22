// Assign the data from `data.js` to a descriptive variable
var tableData = data;

var tbody = d3.select("tbody");

function table(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var ufoInfo = row.append("td");
        ufoInfo.text(val);
      }
    );
  });
}

function buttonClick() {
// Prevent the page from refreshing
 d3.event.preventDefault();
 // Get the value property of the input element
  var date = d3.select("#datetime").property("value");
  var filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  table(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);