"use client";

import { ThemeProvider } from "next-themes";

function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
