
import MainNevigation from "./main-navigation";

export default function Layout(props) {
    return (
        <>
        <MainNevigation />
            <main>
                {props.children}
            </main>
        </>
    );
}