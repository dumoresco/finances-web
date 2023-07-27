import GlobalStyles from "./global/css/globalStyles";
import { AppRoutes } from "./routes/routes";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  return (
    <main>
      <GlobalStyles />
      <AppRoutes />
    </main>
  );
}

export default App;
