function createPage() {
  const form = document.getElementById("pageForm");
  const showTitle = form.elements["showTitle"].checked;
  const showHorizontalLines = form.elements["showHorizontalLines"].checked;
  const tableView = form.elements["tableView"].checked;
  const textColor = form.elements["textColor"].value;

  let htmlContent = "";

  if (showTitle) {
    htmlContent += "<h1>This is a Title</h1>";
  }

  htmlContent += "<div>";

  if (tableView) {
    htmlContent += "<table>";
    htmlContent += "<tr>";
    htmlContent += `<th style="color: ${textColor};">Header 1</th>`;
    htmlContent += `<th style="color: ${textColor};">Header 2</th>`;
    htmlContent += `<th style="color: ${textColor};">Header 3</th>`;
    htmlContent += "</tr>";
    htmlContent += "<tr>";
    htmlContent += `<td style="color: ${textColor};">Data 1</td>`;
    htmlContent += `<td style="color: ${textColor};">Data 2</td>`;
    htmlContent += `<td style="color: ${textColor};">Data 3</td>`;
    htmlContent += "</tr>";
    htmlContent += "</table>";
  } else {
    htmlContent += "<ul>";
    htmlContent += `<li style="color: ${textColor};">Item 1</li>`;
    htmlContent += `<li style="color: ${textColor};">Item 2</li>`;
    htmlContent += `<li style="color: ${textColor};">Item 3</li>`;
    htmlContent += "</ul>";
  }

  htmlContent += "</div>";

  if (showHorizontalLines) {
    htmlContent = "<hr>" + htmlContent + "<hr>";
  }

  document.body.innerHTML = htmlContent;
}

function resetForm() {
  document.getElementById("pageForm").reset();
}
