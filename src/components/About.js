import { Link } from 'react-router-dom'
//when using routers use Link not href
const About = () => {
  return (
    <div>
      <h5>Version 1.0.0</h5>
      <Link to='/'> =Go Back</Link>
  
    </div>
  )
}

export default About