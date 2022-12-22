import CorrectValidation from './CorrectValidation'
import './ValidationMessage.scss'

type Props = {
  validated: boolean
}

const ValidationMessage = ({ validated }: Props) => {
  return (
    <>
      <div className="message-background"></div>
      {validated && <CorrectValidation />}
    </>
  )
}

export default ValidationMessage
