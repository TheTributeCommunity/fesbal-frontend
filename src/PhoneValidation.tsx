import type { ChangeEvent } from 'react'
import { useRef, useState } from 'react'
import BackButton from './components/BackButton'
import ValidationMessage from './components/ValidationMessage/ValidationMessage'
// import CorrectValidation from './components/ValidationMessage'
import './PhoneValidation.scss'

type Props = {}

const PhoneValidation = ({}: Props) => {
  const inputsRef = [null, null, null, null].map(() => useRef<HTMLInputElement>(null))
  const [numbers, setNumbers] = useState<number[]>([-1, -1, -1, -1])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [validated, setValidated] = useState<boolean>()

  const OnChangeNumber = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!event.target.value) return setNumbers((array) => array.map((value, i) => (i === index ? -1 : value)))
    if (index < 3) inputsRef[index + 1]?.current?.focus()
    else buttonRef?.current?.focus()

    const new_number = Number(event.target.value[event.target.value.length - 1])
    setNumbers((array) => array.map((value, i) => (i === index ? new_number : value)))
  }

  const resetNumbers = () => {
    setNumbers([-1, -1, -1, -1])
    setValidated(undefined)
    inputsRef[0]?.current?.focus()
  }

  return (
    <div className="PhoneValidation">
      <div className="numbers-menu">
        <BackButton />
        <h2>Validar teléfono</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu libero sit amet.
        </p>
        <form>
          <label>
            Código de validación <br />
            <div className="numbers-inputs">
              {numbers.map((_, i) => (
                <input
                  autoComplete="off"
                  autoFocus={i === 0}
                  className="number-input"
                  key={i}
                  onChange={(event) => OnChangeNumber(event, i)}
                  ref={inputsRef[i]}
                  type="number"
                  value={numbers[i] !== -1 ? numbers[i] : ''}
                />
              ))}
            </div>
          </label>
        </form>
        {/* This is a link to itself so it reset data and resend code*/}
        <div className="resend">
          <a>Reenviar código</a>
        </div>
      </div>

      <button ref={buttonRef} disabled={numbers.some((value) => value === -1)} onClick={() => setValidated(false)}>
        Continuar
      </button>

      {validated !== undefined && <ValidationMessage validated={validated} errorCallback={resetNumbers} />}
    </div>
  )
}

export default PhoneValidation