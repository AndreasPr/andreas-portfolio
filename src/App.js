import React, {lazy, Suspense} from 'react';

const Footer = lazy(() => import('./components/footer/footer.component'));

function App() {
  return (
    <div>
        <h1>Hello</h1>

      <Suspense fallback={<div/>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
