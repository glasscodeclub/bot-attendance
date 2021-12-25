let c = ''

document.querySelector('button[aria-label="Show everyone"]').click()

setTimeout(() => {
  const allParticipants = document.querySelectorAll('span[class="ZjFb7c"]')
  const you = allParticipants[0].innerText
  const taker = allParticipants[allParticipants.length - 1].innerText

  c += you + '@'

  for (let i = 1; i < allParticipants.length - 1; i++) {
    let attendee = allParticipants[i].innerText
    c += attendee + '@'
  }

  function copyToClipboard(text) {
    const dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = text
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
  }

  copyToClipboard(c)

  const iframe = document.createElement('IFRAME')
  iframe.setAttribute('name', 'formTarget')
  iframe.setAttribute('style', 'display:none')

  const form = document.createElement('FORM')
  form.setAttribute('method', 'post')
  form.setAttribute('action', 'http://localhost:3000/attendance/botID')
  form.setAttribute('target', 'formTarget')

  const setForm = (attr) => {
    const input = document.createElement('input')
    Object.keys(attr).forEach((key) => {
      input.setAttribute(key, attr[key])
    })
    form.appendChild(input)
  }
  console.log(you)
  setForm({ type: 'hidden', name: 'you', value: you })
  setForm({ type: 'hidden', name: 'taker', value: taker })
  setForm({ type: 'hidden', name: 'date', value: new Date().toLocaleDateString() })
  setForm({ type: 'hidden', name: 'time', value: new Date().toLocaleTimeString() })
  setForm({ type: 'hidden', name: 'data', value: c })
  setForm({ type: 'hidden', name: 'url', value: window.location.href })

  document.body.appendChild(form)
  form.submit()
}, 50)
