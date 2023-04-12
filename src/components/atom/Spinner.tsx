import { TailSpin } from 'react-loader-spinner'

const Spinner = (): JSX.Element => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <TailSpin
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                color={'#0F95CE'}
            /></div>
    )
}

export default Spinner