class FormBuilder {
  constructor(fields, container) {
    this.fields = fields;
    this.container = container;
    this.render();
  }

  render() {
    let html = '<form id="dynamicForm">';
    this.fields.forEach((field, index) => {
      html += `<div class="field"><label for="field${index}">${field.label}</label>`;
      if (field.type === "textarea") {
        html += `<textarea id="field${index}" name="${field.label}"></textarea>`;
      } else if (field.type === "select") {
        html += `<select id="field${index}" name="${field.label}">`;
        (field.options || []).forEach((option) => {
          html += `<option value="${option}">${option}</option>`;
        });
        html += "</select>";
      } else {
        html += `<input type="${field.type}" id="field${index}" name="${field.label}">`;
      }
      html += "</div>";
    });
    html += '<button type="submit">Submit</button></form>';
    this.container.innerHTML = html;

    document.getElementById("dynamicForm").addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Form Data:", this.getFormData());
    });
  }

  getFormData() {
    const data = {};
    this.fields.forEach((field, index) => {
      data[field.label] = document.getElementById(`field${index}`).value;
    });
    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "date", label: "Date of Birth" },
  { type: "select", label: "Country", options: ["India", "USA", "UK", "Canada"] },
  { type: "textarea", label: "About You" }
];

const builder = new FormBuilder(fields, document.getElementById("formContainer"));
