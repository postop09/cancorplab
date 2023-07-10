import { useEffect } from "react";
import { analyticsLogEvent } from "@/lib/firebase.lib";

const useAnalyticsPage = (routeTitle?: string) => {
  useEffect(() => {
    if (routeTitle) {
      analyticsPage(routeTitle);
    }
  }, []);

  const analyticsPage = (pageTitle: string) => {
    analyticsLogEvent("page_view", {
      page_title: pageTitle,
    });
  };

  return { analyticsPage };
};

export default useAnalyticsPage;
