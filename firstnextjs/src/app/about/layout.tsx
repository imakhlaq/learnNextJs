//this layout apply for only about and its nested page

import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About</nav>
      {children}
    </>
  );
}
