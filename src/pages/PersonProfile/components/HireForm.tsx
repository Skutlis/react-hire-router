import { useState } from 'react'
import { Person } from '../../../objects/PersonInfoObjects'
import { Link, useNavigate } from 'react-router-dom';

function HireForm(props : {person : Person;
                          hirePerson: (person : Person) => void
}) {
  const { person, hirePerson } = props;
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()
  function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
    person.wage = wage;
    hirePerson(person)
    console.log(person)
    navigate("/")
    event.preventDefault()
    

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(Number(e.target.value))}
        value={wage}
      />
      
      <button type="submit">Hire</button>
    
      
      
    </form>
  )
}

export default HireForm
