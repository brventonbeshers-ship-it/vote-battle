import type { Metadata } from "next";
import "./globals.css";
import { StacksProvider } from "@/hooks/useStacks";

export const metadata: Metadata = {
  title: "Vote Battle — A vs B on Stacks",
  description: "Vote in 20 head-to-head battles. Every vote stored on Stacks blockchain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="talentapp:project_verification" content="52efd82ddf98a10c3ee30cfc6eb60d8ca1b675c458f09124c257a2d2a39973321130d87df903873fc2b4fe7fa437e4b154ab9d07155bb0ed0cb2f05829203eee" />
      </head>
      <body className="min-h-screen text-white antialiased relative">
        <StacksProvider>{children}</StacksProvider>
      </body>
    </html>
  );
}
