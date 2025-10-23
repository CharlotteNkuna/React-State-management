import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Quiz from "./Components/Quiz";
import CheckInForm from "./Components/CheckInForm";
import Accordion from "./Components/Accordion";
import Form from "./Components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to My App</h1>
      <p className="mb-4">Select a section to visit:</p>

      <div className="d-flex justify-content-center flex-wrap gap-3">
        <button className="btn btn-primary" onClick={() => navigate("/quiz")}>
          Go to Quiz
        </button>
        <button className="btn btn-success" onClick={() => navigate("/checkin")}>
          Go to Check-In Form
        </button>
        <button className="btn btn-warning" onClick={() => navigate("/accordion")}>
          Go to Accordion
        </button>
        <button className="btn btn-info" onClick={() => navigate("/form")}>
          Go to Form
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/checkin" element={<CheckInForm />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}
