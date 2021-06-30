import { ReactNode } from "react";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div id="container" className="max-w-screen-lg mx-auto">
      <main className="mt-8">{props.children}</main>
    </div>
  );
};
