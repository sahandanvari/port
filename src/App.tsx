import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { CaseStudyPage } from "@/pages/CaseStudyPage";
import { WritingIndexPage } from "@/pages/WritingIndexPage";
import { WritingPostPage } from "@/pages/WritingPostPage";
import { DesignSystemsPage } from "@/pages/DesignSystemsPage";
import { ResumePage } from "@/pages/ResumePage";
import { ArtifactsGalleryPage } from "@/pages/ArtifactsGalleryPage";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { ThemePanel } from "@/theme/ThemePanel";
import { GlassNav } from "@/components/GlassNav";
import { AmbientBackground } from "@/components/AmbientBackground";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { PortfolioChromeProvider } from "@/context/PortfolioChromeContext";
import { UnderConstructionBanner } from "@/components/UnderConstructionBanner";
import { AnalyticsListener } from "@/components/AnalyticsListener";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnalyticsListener />
        <PortfolioChromeProvider>
          <AmbientBackground />
          <GlassNav />
          <ThemePanel />
          <UnderConstructionBanner />
          <Routes>
            <Route element={<PortfolioLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/work/:slug" element={<CaseStudyPage />} />
              <Route
                path="/work/starter-kit"
                element={<Navigate to="/work/luminis" replace />}
              />
              <Route
                path="/work/audit"
                element={<Navigate to="/work/asset-gallery" replace />}
              />
              <Route path="/writing" element={<WritingIndexPage />} />
              <Route path="/writing/:slug" element={<WritingPostPage />} />
              <Route path="/design-systems" element={<DesignSystemsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/artifacts" element={<ArtifactsGalleryPage />} />
            </Route>
          </Routes>
        </PortfolioChromeProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
