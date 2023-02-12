import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/globals.css";
import { Windmill } from "@windmill/react-ui";
import myTheme from "@/asset/theme/myTheme";

export default function App({ Component, pageProps }) {
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
