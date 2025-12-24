import { useParams } from "react-router-dom";
import { InteractiveDataVis } from "./interactiveDataVis";
import { DataVis } from "./dataVis";
import { Twofish } from "./twofish";
import { ErrorPage } from "../errorPage";
import { BallDefenders } from "./ballDefenders";

export const ProjectPages = () => {
let urlParams = useParams();

  const projectName = urlParams.projectName ?? "";
  let page;
  switch (projectName) {
    case "migration-motivations":
      page = <InteractiveDataVis />;
      break;
    case "data-vis-work":
      page = <DataVis />;
      break;
    case "fritter":
      page = <Twofish />;
      break;
    case "ball-defenders":
      page = <BallDefenders />;
      break
    default:
      page = <ErrorPage />;
  }

  return page;

}