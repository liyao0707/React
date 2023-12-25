import { Provider } from "react-redux";
import { store, persistor } from "../Redux/store";
import Home from "./home";
import MyConnect from "./home/index2";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
      {/* <MyConnect></MyConnect> */}
    </Provider>
  );
};
export default App;
