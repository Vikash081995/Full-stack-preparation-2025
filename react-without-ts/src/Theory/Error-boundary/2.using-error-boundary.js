// Wrap any part of your application where you want to catch errors:;

import ErrorBoundary from "./1.creating-error-boundary";
import Dummy from "./dummy-component";

const UsingErrorBoundary = () => {
  return (
    <ErrorBoundary>
      <Dummy />
    </ErrorBoundary>
  );
}
export default UsingErrorBoundary;