const scriptURL = 'https://script.google.com/macros/s/AKfycbwfefuB84YX7ZpW56FeDDMMlU5DVpk3g9tlWk9SIWMnHQR08zX0k9UVuqKKiX6LXZBX8A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})