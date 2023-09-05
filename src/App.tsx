import { ToastContainer } from "react-bootstrap";
import GlobalStyles from "./global/css/globalStyles";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <main>
      <ToastContainer/>
      <GlobalStyles />
      <AppRoutes />
    </main>
  );
}

export default App;
