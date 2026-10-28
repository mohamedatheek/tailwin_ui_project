
import './style.css'

document.querySelectorAll('[data-message]').forEach((button) => {
  button.addEventListener('click', () => {
    const message = document.querySelector('#button-message')

    if (message) {
      message.textContent = button.dataset.message
    }
  })
})
