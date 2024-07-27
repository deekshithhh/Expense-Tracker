import "./App.css";
import Homepage from "./Homepage";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <div>
        <Homepage />
      </div>
    </SnackbarProvider>
  );
}

export default App;
