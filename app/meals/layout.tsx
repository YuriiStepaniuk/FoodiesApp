import React from "react";

export default function MealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Meals Layout</p>
      {children}
    </>
  );
}
