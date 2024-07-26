import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcept/CoreConcepts.jsx";
import { Examples } from "./components/CoreConcept/Examples.jsx";

function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    );
}

export default App;
