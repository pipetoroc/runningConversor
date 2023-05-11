const main = document.querySelector('main')
const form = document.getElementById('form-activity')

form.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const formCheck = document.getElementById('form-velocities')
  if (formCheck) {
    formCheck.remove()
  }

  const form = document.createElement('form')
  form.id = 'form-velocities'
  const fieldset = document.createElement('fieldset')

  const legend = document.createElement('legend')
  legend.innerHTML = 'Escribe las velocidades de tus entrenos'
  legend.className = 'velocidades'
  fieldset.appendChild(legend)

  const numberActivities = document.getElementById('number-activities')
  for (let i = 1; i <= numberActivities.value; i++) {
    const input = document.createElement('input')
    input.placeholder = `Escribe la velocidad ${i}`
    fieldset.appendChild(input)
  }
  form.appendChild(fieldset)
  main.appendChild(form)
  calcularVelocidad()
})
const formVelocity = document.getElementById('form-velocities')
formVelocity.addEventListener('submit', calcularVelocidad)

function calcularVelocidad (evt) {
  evt.preventDefault()
  const inputs = document.querySelectorAll('input')
  console.log(inputs)
}
