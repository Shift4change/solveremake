import React from "react";
import ReactDOM from "react-dom";
import{ InfoProvider } from "./components/context"
import App from "./App";

import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
<InfoProvider>
<Router>
<App />
</Router>
</InfoProvider>,
 document.getElementById("root"));
