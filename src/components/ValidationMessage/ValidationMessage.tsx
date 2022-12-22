import CorrectValidation from './CorrectValidation'
import ErrorValidation from './ErrorValidation'
import './ValidationMessage.scss'

type Props = {
  validated: boolean
  errorCallback: () => void
}

const ValidationMessage = ({ validated, errorCallback }: Props) => {
  return (
    <>
      <div className="message-background"></div>
      {validated && <CorrectValidation />}
      {!validated && <ErrorValidation clickCallback={errorCallback} />}
    </>
  )
}

export default ValidationMessage
