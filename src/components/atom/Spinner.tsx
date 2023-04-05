import { ColorRing } from 'react-loader-spinner'

const Spinner = (): JSX.Element => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#0F95CE', '#002E5D', '#e8f8ff', '#058CCC', '#F9FDFF']}
            /></div>
    )
}

export default Spinner