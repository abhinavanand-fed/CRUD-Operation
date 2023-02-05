const form = document.querySelector("#crud-form");
const inputField = document.querySelector("#input-field");
const tableBody = document.querySelector("#table-body");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const data = inputField.value;
  inputField.value = "";

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${data}</td>
    <td>
      <button id="btn-update-${data}">Update</button>
      <button id="btn-delete-${data}">Delete</button>
    </td>
  `;

  tableBody.appendChild(newRow);
});

tableBody.addEventListener("click", function(event) {
  if (event.target.id.startsWith("btn-update")) {
    const data = event.target.id.split("-")[2];
    const currentData = event.target.parentElement.previousElementSibling;
    const updatedData = prompt("Enter updated data:", data);

    currentData.textContent = updatedData;
    event.target.setAttribute("id", `btn-update-${updatedData}`);
  } else if (event.target.id.startsWith("btn-delete")) {
    const row = event.target.parentElement.parentElement;
    row.remove();
  }
});
