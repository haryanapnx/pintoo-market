import React, { lazy, Suspense } from 'react';
import Spinner from '../LoadingSpinner/LoadingSpinner';

interface LoadableOptions {
  fallback?: React.ReactNode;
}

const loadable = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  options: LoadableOptions = {}
) => {
  const LazyComponent = lazy(importFunc);

  const Component = (props: Record<string, unknown>) => (
    <Suspense fallback={options.fallback || <Spinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );

  Component.displayName = `LoadableComponent(${importFunc.name || 'Unknown'})`;
  return Component;
};

export default loadable;
