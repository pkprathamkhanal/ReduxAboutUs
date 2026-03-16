import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { pagesConfig } from "./pages.config";
import { Route, Routes } from "react-router-dom";

const { Pages, Layout, mainPage } = pagesConfig;

const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : () => <>No pages found</>;

function LayoutWrapper({ children, currentPageName }) {
  if (Layout) {
    return <Layout currentPageName={currentPageName}>{children}</Layout>;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          }
        />

        {Object.entries(Pages).map(([path, Page]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={
              <LayoutWrapper currentPageName={path}>
                <Page />
              </LayoutWrapper>
            }
          />
        ))}

        <Route
          path="*"
          element={<div style={{ padding: "2rem", color: "white" }}>Page not found</div>}
        />
      </Routes>
    </QueryClientProvider>
  );
}
