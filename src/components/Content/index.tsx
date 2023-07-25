import { ReactNode } from "react";

import { Container } from "./styles";

function Content({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

export default Content;
