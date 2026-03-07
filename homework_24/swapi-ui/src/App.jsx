import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import CharacterList from "./components/CharacterList"

function App() {
  return (
    <div className="container py-4">

      <Header />
      <SearchBar />
      <CharacterList />

    </div>
  )
}

export default App