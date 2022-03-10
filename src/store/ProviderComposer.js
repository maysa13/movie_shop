import React, { cloneElement } from "react"

//impoart providers
import { TestProvider } from './TestContext.js'

function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

export default function ContextProvider({ children }) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={[
        <TestProvider />
      ]}
    >
      {children}
    </ProviderComposer>
  );
}