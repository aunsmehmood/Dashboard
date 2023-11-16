import React from "react";
import "./App.css";
import Layout from "./pages/Layout/layout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Layout>
        <div className="heading">
          <Dashboard />
        </div>
      </Layout>
    </>
  );
};

export default App;
