import { Fragment } from "react";
import ComponentBanner from "./component/banner"
import CompoenntWhatIsNFT from "./component/whatIsNFT"

function App() {
  return (
    <Fragment>
      <ComponentBanner />
      <CompoenntWhatIsNFT />
      <div className="h-[1000px]" >

      </div>
    </Fragment>
  );
}

export default App;
