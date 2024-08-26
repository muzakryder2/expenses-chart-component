const mondayBar = document.querySelector('.bar-mon')
const tuesdayBar = document.querySelector('.bar-tue')
const wednesdayBar = document.querySelector('.bar-wed')
const thursdayBar = document.querySelector('.bar-thu')
const fridayBar = document.querySelector('.bar-fri')
const saturdayBar = document.querySelector('.bar-sat')
const sundayBar = document.querySelector('.bar-sun')

const url = '../data.json'

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    mondayBar.style.backgroundColor = 'var(--softRed)'
    mondayBar.style.height = `${(data[0].amount / 200) * 300}%`
    tuesdayBar.style.backgroundColor = 'var(--softRed)'
    tuesdayBar.style.height = `${(data[1].amount / 200) * 300}%`
    wednesdayBar.style.backgroundColor = 'var(--cyan)'
    wednesdayBar.style.height = `${(data[2].amount / 200) * 300}%`
    thursdayBar.style.backgroundColor = 'var(--softRed)'
    thursdayBar.style.height = `${(data[3].amount / 200) * 300}%`
    fridayBar.style.backgroundColor = 'var(--softRed)'
    fridayBar.style.height = `${(data[4].amount / 200) * 300}%`
    saturdayBar.style.backgroundColor = 'var(--softRed)'
    saturdayBar.style.height = `${(data[5].amount / 200) * 300}%`
    sundayBar.style.backgroundColor = 'var(--softRed)'
    sundayBar.style.height = `${(data[6].amount / 200) * 300}%`

    mondayBar.addEventListener('mouseover', () => {
      document.querySelector('.mon-data').classList.remove('hidden')
      document.querySelector('.mon-data').textContent = `$${data[0].amount}`
    })

    mondayBar.addEventListener('mouseout', () => {
      document.querySelector('.mon-data').classList.add('hidden')
    })

    tuesdayBar.addEventListener('mouseover', () => {
      document.querySelector('.tue-data').classList.remove('hidden')
      document.querySelector('.tue-data').textContent = `$${data[1].amount}`
    })

    tuesdayBar.addEventListener('mouseout', () => {
      document.querySelector('.tue-data').classList.add('hidden')
    })

    wednesdayBar.addEventListener('mouseover', () => {
      document.querySelector('.wed-data').classList.remove('hidden')
      document.querySelector('.wed-data').textContent = `$${data[2].amount}`
    })

    wednesdayBar.addEventListener('mouseout', () => {
      document.querySelector('.wed-data').classList.add('hidden')
    })

    thursdayBar.addEventListener('mouseover', () => {
      document.querySelector('.thu-data').classList.remove('hidden')
      document.querySelector('.thu-data').textContent = `$${data[3].amount}`
    })

    thursdayBar.addEventListener('mouseout', () => {
      document.querySelector('.thu-data').classList.add('hidden')
    })

    fridayBar.addEventListener('mouseover', () => {
      document.querySelector('.fri-data').classList.remove('hidden')
      document.querySelector('.fri-data').textContent = `$${data[4].amount}`
    })

    fridayBar.addEventListener('mouseout', () => {
      document.querySelector('.fri-data').classList.add('hidden')
    })

    saturdayBar.addEventListener('mouseover', () => {
      document.querySelector('.sat-data').classList.remove('hidden')
      document.querySelector('.sat-data').textContent = `$${data[5].amount}`
    })

    saturdayBar.addEventListener('mouseout', () => {
      document.querySelector('.sat-data').classList.add('hidden')
    })

    sundayBar.addEventListener('mouseover', () => {
      document.querySelector('.sun-data').classList.remove('hidden')
      document.querySelector('.sun-data').textContent = `$${data[6].amount}`
    })

    sundayBar.addEventListener('mouseout', () => {
      document.querySelector('.sun-data').classList.add('hidden')
    })
  })

  .catch((error) => console.log('Error:', error.message))
