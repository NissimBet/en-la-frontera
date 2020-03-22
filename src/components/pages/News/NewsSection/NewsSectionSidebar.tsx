import React from "react";
import TopNews, {
  TopNewsData as TopNewsDataInterface
} from "../../../News/TopNews";

export type TopNewsData = TopNewsDataInterface;

interface NewsSidebarProps {
  topNews: Array<TopNewsDataInterface>;
}

const NewsSidebar: React.FunctionComponent<NewsSidebarProps> = ({
  topNews
}) => {
  return (
    <div>
      <TopNews topNews={topNews} />
    </div>
  );
};

export default NewsSidebar;
