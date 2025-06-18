import { ReactNode } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Breadcrumbs />
      <section>{children}</section>
    </div>
  );
}
