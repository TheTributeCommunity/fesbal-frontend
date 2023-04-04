import BurgerMenuIcon from '../icons/BurgerMenuIcon'
import BurgerMenu from '../molecules/BurgerMenu'
import { useMemo, useState } from 'react'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'

const AppBurgerMenuButton = (): JSX.Element => {
    const [showMenu, setShowMenu] = useState(false)

    const userType = useMemo(() => window.location.pathname.includes('entity') ? 'entity' : 'recipient', [])

    return (
        <>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md" onClick={() => setShowMenu(true)}>
                <BurgerMenuIcon/>
            </button>
            <BurgerMenu visible={showMenu} userType={userType} onHide={() => setShowMenu(false)} />
        </>
    )
}

export default AppBurgerMenuButton
