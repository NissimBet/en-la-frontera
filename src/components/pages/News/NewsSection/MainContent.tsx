import React from "react";

import DailyTopNews, {
  DailyTopNewsInterface
} from "../../../News/DailyTopNews";
import RelevantNews, { SliderNewsData } from "../../../News/RelevantNewsSlider";

interface NewsSectionMainContentProps {
  topNews: DailyTopNewsInterface;
  relevantNews: Array<SliderNewsData>;
  sectionName: string;
}

const NewsSectionMainContent: React.FunctionComponent<NewsSectionMainContentProps> = ({
  topNews,
  relevantNews,
  sectionName
}) => {
  return (
    <div>
      <h1>{sectionName}</h1>
      {topNews && <DailyTopNews {...topNews} />}
      <RelevantNews relevantNews={relevantNews} />
    </div>
  );
};

export default NewsSectionMainContent;
