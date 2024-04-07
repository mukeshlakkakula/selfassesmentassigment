import "./App.css";

import Home from "./components/Home";
import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import WhatWillLearn from "./components/WhatWillLearn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrepJourney from "./components/AccaPrepJourney";
import NotFound from "./components/NotFound";
import PlacementAssistance from "./components/PlacementAssistance";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/whychooseus" Component={WhyChooseUs} />
          <Route exact path="/whatwilllearn" Component={WhatWillLearn} />
          <Route
            exact
            path="/placementassistance"
            Component={PlacementAssistance}
          />
          <Route exact path="/prepjourney" Component={PrepJourney} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
