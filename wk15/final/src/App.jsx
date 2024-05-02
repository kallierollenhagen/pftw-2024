import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Issue } from "./views/Issue";
import { About } from "./views/About";
import { Magazine } from './views/Magazine';
import './App.css';
import './index.css';
import issueData from "./assets/issue-list.json"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magazine" element={<Magazine data={issueData} />} />
        <Route path="/about" element={<About data={issueData} />} />
        <Route path="/:slug" element={<Issue data={issueData} />} />
      </Routes>
    </>
  )
}

export default App;
