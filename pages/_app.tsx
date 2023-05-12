import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import UserContextProvider from "../context/UserContext";
import ContractContextProvider from "../context/ContractContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <UserContextProvider>
        <ContractContextProvider>
          <Component {...pageProps} />
        </ContractContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
