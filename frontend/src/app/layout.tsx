import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="text-white fs-6">
        <header className="">
          <Nav className="align-items-center justify-content-between">
            <NavItem className="ms-3 mt-1">
              <h1 className="display-6 fs-4">
                Lista de tarefas |{" "}
                <span className="text-white">InfinityBase</span>
              </h1>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavItem>
                <NavLink
                  href=""
                  className="d-flex align-items-center gap-1 link-info"
                >
                  <FaLinkedin /> Caio Balieiro
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  className="d-flex align-items-center gap-1 link-info"
                >
                  <FaGithub /> Caio Balieiro
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  className="d-flex align-items-center gap-1 link-info"
                >
                  <FaLinkedin /> InfinityBase
                </NavLink>
              </NavItem>
            </NavItem>
          </Nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
