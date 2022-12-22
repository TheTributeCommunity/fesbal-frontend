import type { ChangeEvent } from 'react'
import { useRef, useState } from 'react'
import BackButton from './components/BackButton'
import './PhoneValidation.scss'

type Props = {}

const PhoneValidation = ({}: Props) => {
  const inputsRef = [null, null, null, null].map(() => useRef<HTMLInputElement>(null))
  const [numbers, setNumbers] = useState<number[]>([-1, -1, -1, -1])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const OnChangeNumber = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!event.target.value) return setNumbers((array) => array.map((value, i) => (i === index ? -1 : value)))
    if (index < 3) inputsRef[index + 1]?.current?.focus()
    else buttonRef?.current?.focus()

    const new_number = Number(event.target.value[event.target.value.length - 1])
    setNumbers((array) => array.map((value, i) => (i === index ? new_number : value)))
  }

  return (
    <div className="PhoneValidation">
      <div className="numbers-menu">
        <BackButton />
        <h1>Validar teléfono</h1>
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
          <a onClick={() => window.location.reload()}>Reenviar código</a>
        </div>
      </div>

      <button ref={buttonRef} disabled={numbers.some((value) => value === -1)}>
        Continuar
      </button>
    </div>
  )
}

export default PhoneValidation
