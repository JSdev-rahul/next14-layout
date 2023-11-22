"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "../components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
  const [token, setToken] = useState("");
  const [check, setIsChecked] = useState(false);
  
  useLayoutEffect(() => {
    const tkn = "yipipj"
    console.log("tkn",tkn)
    setToken(() => tkn);
    setIsChecked(() => true);
  }, [children,token]); // Empty dependency array to run this effect only once
  console.log("token", token);
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`h-full`}>
        <div>
          {check ? (
            token ? (
              <MainLayout>{children}</MainLayout>
            ) : (
              <div>{children}</div>
            )
          ) : null}
        </div>
      </body>
    </html>
  );
}
