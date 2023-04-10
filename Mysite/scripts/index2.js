const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally
  const formData = new FormData(form); // get the form data
  // do something with the form data, such as sending it to the server
  // using XMLHttpRequest, fetch, or any other method of your choice
  console.log(formData.get('NaDreview')); // example: log the NaDreview field value to the console
  alert("İşlem yapıldı");
});