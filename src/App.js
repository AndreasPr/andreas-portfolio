import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

const Footer = lazy(() => import('./components/footer/footer.component'));
const Contact = lazy(() => import('./components/contact/contact.component'));

function App() {
  return (
    <div>
      <h1>Hello</h1>
      
      <Suspense fallback={<div/>}>
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
