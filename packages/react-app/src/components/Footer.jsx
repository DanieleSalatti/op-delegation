import { Layout } from "antd";
import React from "react";

// displays a page header

export default function ScaffoldFooter() {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: "center", background: "transparent" }}>
      <p>
        Created by the{" "}
        <a href="https://danielesalatti.com" target="_blank">
          Daniele Salatti
        </a>{" "}
        using{" "}
        <a href="https://github.com/scaffold-eth/scaffold-eth" target="_blank">
          🏗 scaffold-eth
        </a>
      </p>
      <p>
        <a href="https://github.com/DanieleSalatti/op-delegation" target="_blank">
          code
        </a>
      </p>
    </Footer>
  );
}
