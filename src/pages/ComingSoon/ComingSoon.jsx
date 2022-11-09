import { useState, useEffect } from 'react'
import moment, { duration } from 'moment'
import './ComingSoon.scss'
import { HiDownload } from 'react-icons/hi'
import CV from '../../img/Abdullah-Resume.pdf'
import Rocket from '../../img/rocket.png'

const ComingSoon = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [secs, setSecs] = useState(0)

  const setCountDown = () => {
    const futureDate = moment('2022-11-11 00:00:00')
    const today = moment()
    const clockDuration = duration(futureDate.diff(today))

    setDays(Math.floor(clockDuration.asDays()))
    setHours(clockDuration.hours())
    setMinutes(clockDuration.minutes())
    setSecs(clockDuration.seconds())
  }


  useEffect(() => {
    setCountDown() // calling immediately so we do not see the zeroes from start

    const interval = setInterval(() => {
      setCountDown()
    }, 1000)

    return function cleanup() {
      clearInterval(interval)
    }
  })

  return (
    <main className='main'>
      {/* <h2 className='main__logo'><span className='main__logo__first'>T</span><span className='main__logo__sec'>oronto</span><span className='main__logo__third'><span className='main__logo__fifth'>W</span>eb</span><span className='main__logo__fourth'>echnologies</span></h2> */}
      <h2 className='main__logo'>itangishaka.</h2>
      <article className='main__content'>
        <p>Website Is Under Maintenance</p>
        <h1>
          We're <span> Launching </span> Soon
        </h1>
        <div className='main__launch-time'>
          <div>
            <p>{days}</p>
            <span>Days</span>
          </div>
          <div>
            <p>{hours}</p>
            <span>Hours</span>
          </div>
          <div>
            <p>{minutes}</p>
            <span>Minutes</span>
          </div>
          <div>
            <p>{secs}</p>
            <span>Seconds</span>
          </div>
        </div>
        <a href={CV} download>
          Download &nbsp; CV <HiDownload className='main__icon' />
        </a>
      </article>
      <img src={Rocket} alt='rocket' className='main__rocket' />
    </main>
  )
}

export default ComingSoon
