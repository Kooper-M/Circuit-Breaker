import problemImage from '../includes/Screenshot 2026-10-05 115351.png'
import { useState, type SubmitEvent } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  function checkAnswer(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const answer = String(formData.get('answer') ?? '').trim()

    if (answer === '') {
      setMessage('Enter an answer please')
      return
    }

    if (answer === '33R/37') {
      setMessage('Correct!')
    } else {
      setMessage('Try Again!')
    }
  }
  return (
    <div className="page">
      <header className="site-header">
        <h1 className="logo">CIRCUIT BREAKER</h1>
      </header>

      <main className="problem">
        <div className="problem-content">
          <img src={problemImage} alt="Coding problem" width={700} />
          <form onSubmit= {checkAnswer}>
            <input
              type="text"
              name="answer"
              aria-label="Answer to the problem"
              placeholder="Answer to the problem"
            />

            <button type= "submit">Check Answer</button>
            <p role="status">{message}</p>
          </form>
        </div>
      </main>
    </div>
  )
}
