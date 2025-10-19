"use client";

import { useTheme } from "next-themes@0.4.6";
import { Toaster as Sonner, ToasterProps } from "sonner@2.0.3";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "hsl(0, 0%, 100%)",
          "--normal-text": "hsl(0, 0%, 9%)",
          "--normal-border": "hsl(0, 0%, 89%)",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          color: "hsl(0, 0%, 9%)",
          backgroundColor: "hsl(0, 0%, 100%)",
        },
        classNames: {
          title: "!text-gray-900 font-semibold",
          description: "!text-gray-900",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
