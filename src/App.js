import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { Toaster } from "react-hot-toast";
const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
    <div className="dark">
      <Toaster />
      {routing}
    </div>
  );
};

export default App;
