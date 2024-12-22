import React from "react";
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
 
      <main className="">{children}</main>
    </>
  );
}
