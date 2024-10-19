import { lazy, useState, Suspense, startTransition } from "react";
// import ComponentA from "./components/ComponentA";

const LazyComponentA = lazy(() => import('./components/ComponentA'))
const LazyComponentB = lazy(() => import('./components/ComponentB'))

const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button onClick={() => {
        startTransition(() => {
          setCompA((prev) => !prev)
        })
      }}>ComponentA</button>
      {/* 低速回線使用時にLazyComponentAやBが読み込まれていない時は、callbackを返す */}
      <Suspense callback={<div>Loading</div>} >
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </ Suspense>
    </>
  );
};

export default Example;
