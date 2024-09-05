
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./containers/Home"
import AddEditHackathon from "./containers/AddEditHackathon"
import HackathonDetail from "./containers/HackathonDetail"
import Header from "./components/Header"
import ChallengeContextProvider from "./context/challenge"

function App() {

  return (
    <BrowserRouter>
      <ChallengeContextProvider>
        <div className="h-svh">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create" element={<AddEditHackathon />} />
            <Route path="challenges/:id/edit" element={<AddEditHackathon />} />
            <Route path="challenges/:id" element={<HackathonDetail />} />
          </Routes>
        </div>
      </ChallengeContextProvider>
    </BrowserRouter>
  )
}

export default App
