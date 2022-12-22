import CorrectIcon from './CorrectIcon'

type Props = {}

const CorrectValidation = ({}: Props) => {
  return (
    <>
      <div className="validation-body">
        <CorrectIcon />
        <h2>Validación correcta</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu libero sit amet.
          Maecenas lacus purus, hendrerit eu libero sit.
        </p>
        <button>Continuar</button>
      </div>
    </>
  )
}

export default CorrectValidation
