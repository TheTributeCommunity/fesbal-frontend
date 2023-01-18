import AppBellButton from "../atom/AppBellButton";
import AppLocationButton from "../atom/AppLocationButton";
import AppWatchButton from "../atom/AppWatchButton";

const BottomNavBar = (): JSX.Element => (
    <div className="w-full flex flex-row justify-center">
        <nav className="flex flex-row justify-between items-center px-auto w-full md:w-1/2 xl:w-1/3 bg-white rounded-xl p-4 fixed bottom-0 px-10">
            <AppWatchButton />
            <AppLocationButton />
            <AppBellButton />
        </nav>
    </div>
);

export default BottomNavBar;
