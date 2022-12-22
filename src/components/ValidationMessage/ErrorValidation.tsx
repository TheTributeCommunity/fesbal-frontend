import ErrorIcon from './ErrorIcon'

type Props = {
  clickCallback: () => void
}

const ErrorValidation = ({ clickCallback }: Props) => {
  return (
    <>
      <div className="validation-body">
        <ErrorIcon />
        <h2>Validación incorrecta</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu libero sit amet.
          Maecenas lacus purus, hendrerit eu libero sit.
        </p>
        <button className="cancel-button" onClick={clickCallback}>
          Reintentar validación
        </button>
      </div>
    </>
  )
}

export default ErrorValidation
