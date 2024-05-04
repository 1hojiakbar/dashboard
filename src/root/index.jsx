import React from "react";
import { Container } from "./style";
import { Navigate, Route, Routes } from "react-router-dom";
import sidebar from "../utils/sidebar";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Sidebar />}>
          {sidebar.map((value) => {
            const Element = value.element;
            return (
              <Route key={value.id} path={value.path} element={<Element />} />
            );
          })}
        </Route>
        <Route path="/" element={<Navigate to={"/summary"} />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Container>
  );
};

export default Root;
