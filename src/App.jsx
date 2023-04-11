import About from './About'
import Home from './Home'
import Skills from './Skills'
import Work from './Work'

function App() {

    return (
        <div className="App w-[var(--page-width)] max-w-[var(--max-page-width)]">
            <Home />
            {/* <About /> */}
            <Work />
            {/* <Skills /> */}
        </div>
    )
}

export default App
