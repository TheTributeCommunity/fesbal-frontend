import classNames from 'classnames'
import { ReactNode } from 'react'

interface BlankStageProps {
    children: ReactNode
    topOffset?: boolean
}

const BlankStage = ({children, topOffset = true}: BlankStageProps ): JSX.Element => {
    return (
        <div className={classNames('bg-page h-screen h-[100dvh]', {
            'pt-16': topOffset,
        })}>
            {children}
        </div>
    )
}

export default BlankStage
