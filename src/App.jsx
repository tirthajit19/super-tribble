import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js"
import { Header } from "./components/Header/Header.jsx" 
import { CoreConcepts  } from "./components/CoreConcept/CoreConcepts.jsx";
import { TabButton } from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please Click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
           <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
           </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;