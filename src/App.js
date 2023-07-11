import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import DefaultLayout from "./Layouts/DefaultLayout";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {routes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout
              const Page = route.component;
              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Layout>
                      <Page></Page>
                    </Layout>
                  }
                >
                </Route>
              ) 
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
