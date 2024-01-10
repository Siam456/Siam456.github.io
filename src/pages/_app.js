import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/globals.css";
import { Windmill } from "@windmill/react-ui";
import myTheme from "@/asset/theme/myTheme";
import { initGA, logPageView } from "../utils/analytics";
import React from "react";
React.useLayoutEffect = React.useEffect;

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <SidebarProvider>
        <Windmill usePreferences theme={myTheme}>
          <Component {...pageProps} />{" "}
        </Windmill>
      </SidebarProvider>
    </>
  );
}
