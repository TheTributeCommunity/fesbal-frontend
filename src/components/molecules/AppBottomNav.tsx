import AppBellButton from "../atom/AppBellButton";
import AppLocationButton from "../atom/AppLocationButton";
import AppWatchButton from "../atom/AppWatchButton";

export default () => {
    return (
        <nav className="app-bottom-nav">
            <AppWatchButton/>
            <AppLocationButton/>
            <AppBellButton/>
        </nav>
    );
}
