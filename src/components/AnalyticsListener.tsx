import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/analytics";

/** Boots GA once, then tracks every React Router navigation. */
export function AnalyticsListener() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname + search);
  }, [pathname, search]);

  return null;
}
