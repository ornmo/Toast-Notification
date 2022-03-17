const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'The first message',
    'Another message',
    'Guess what? Yep another message',
    'And woohoo, again with the messages',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
   const notif = document.createElement('div')
   notif.classList.add('toast')
   notif.classList.add(type ? type : getRandomType())
   
   notif.innerText = getRandomMessage()

   toasts.appendChild(notif)

   setTimeout(() => {
       notif.remove()
   }, 4000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}