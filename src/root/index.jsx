import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/index";
import sidebarData from "../utils/sidebar";
import Container from "./style";

function Root() {
  return (
    <>
      <Container>
        <div
          style={{
            minHeight: 360,
          }}
        >
          <Routes>
            <Route element={<Sidebar />}>
              {sidebarData.map((value) => {
                const Element = value.element;
                return (
                  <Route
                    key={value.id}
                    path={value.path}
                    element={<Element />}
                  />
                );
              })}
            </Route>
            <Route path="/" element={<Navigate to={"/summary"} />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default Root;
