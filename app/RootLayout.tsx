"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/UI/layouts/nav";
import Footer from "@/components/UI/layouts/footer";
// import { WaterCircleFollow } from "@/components/UI/contents/WaterCircleFollow";
import Loader from "@/components/UI/contents/MecuryLoader";
import { Toaster } from "react-hot-toast";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Nav />
      <main className="flex-1 pt-20">
        {/* <WaterCircleFollow /> */}
        {children}
      </main>
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#111",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
          },
          success: {
            style: {
              background: "#22c55e",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#22c55e",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#ef4444",
            },
          },
        }}
      />
    </>
  );
}
