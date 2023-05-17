const main = document.querySelector('main')
const form = document.getElementById('form-activity')

form.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const formCheck = document.getElementById('form-velocities')
  if (formCheck) {
    formCheck.remove()
  }
  const results = document.querySelectorAll('.results')
  console.log(results)
  if (results.length !== 0) {
    results.forEach(p => {
      p.remove()
    })
  }

  const formVelocities = document.createElement('form')
  formVelocities.id = 'form-velocities'
  formVelocities.addEventListener('submit', readValues)

  const fieldset = document.createElement('fieldset')

  const legend = document.createElement('legend')
  legend.innerHTML = 'Escribe las velocidades de tus entrenos'
  legend.className = 'velocidades'
  fieldset.appendChild(legend)

  const button = document.createElement('button')
  button.innerHTML = 'Calcular'

  const numberActivities = document.getElementById('number-activities')
  for (let i = 1; i <= numberActivities.value; i++) {
    const input = document.createElement('input')
    input.pattern = '[0-9]{1,2}:[0-5][0-9]'
    input.placeholder = `min:segundos ${i}`
    fieldset.appendChild(input)
  }
  formVelocities.append(fieldset, button)
  main.appendChild(formVelocities)
  legend.scrollIntoView({ behavior: 'smooth' })
})

function readValues (evt) {
  evt.preventDefault()

  const main = document.querySelector('main')

  const inputs = document.querySelectorAll('#form-velocities input')

  const results = document.querySelectorAll('.results')
  console.log(results)
  if (results.length !== 0) {
    results.forEach(p => {
      p.remove()
    })
  }

  inputs.forEach(input => {
    const value = input.value.split(':')
    console.log(value)
    const minutes = parseInt(value[0])
    const segundos = parseInt(value[1]) / 60

    const km = (60 / (minutes + segundos)).toFixed(2)
    console.log(minutes, segundos, km)

    const p = document.createElement('p')
    p.innerHTML = `${minutes}:${(segundos * 60)} min/km = ${km} km/hr`
    p.className = 'results'
    main.appendChild(p)
    p.scrollIntoView({ behavior: 'smooth' })
  })
}
