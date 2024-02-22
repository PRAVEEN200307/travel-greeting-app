const form = document.querySelector('#formEl');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = document.forms.formEl[0].value
  document.location.href = "/travel-greeting-app/greeting.html?name=" + value
  console.log('form submitted');
})


