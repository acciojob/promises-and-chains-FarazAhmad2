//your JS code here. If required.
function validateForm(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get form inputs
  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);

  // Validate inputs
  if (name.trim() === "" || isNaN(age)) {
    alert("'Please enter valid details");
    return false;
  }

  // Create a promise
  let formPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (age >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  // Handle promise resolution and rejection
  formPromise
    .then(function (name) {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(function (name) {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
}
