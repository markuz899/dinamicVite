import { Suspense, useMemo } from "react";
import "./App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { componentMap, createRoutes, routesApi } from "./pages";
import Router from "./containers/Router";

function App() {
  const routes = useMemo(() => createRoutes(routesApi), [routesApi]);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            {routes.map((route: any) => {
              const Component = componentMap[route.component];
              if (!Component) {
                console.error(`Component ${route.component} not found`);
                return null;
              }
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Router
                      component={Component}
                      shield={route.shield}
                      hidden={route.hidden}
                      isAuth={false}
                      data={{ sections: route.sections }}
                    />
                  }
                />
              );
            })}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/">Homepage</Link>
          <Link to="/contact">Contatti</Link>
          <Link to="/contact/123">Contatti id</Link>
        </nav>
      </BrowserRouter>
    </>
  );
}

export default App;
