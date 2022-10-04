import { Layout } from "antd";
import React from "react";

// displays a page header

export default function ScaffoldFooter() {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: "center", background: "transparent", marginTop: 24 }}>
      <p>
        Created by{" "}
        <a href="https://danielesalatti.com" target="_blank">
          Daniele Salatti | salatti.eth
        </a>{" "}
        using{" "}
        <a href="https://github.com/scaffold-eth/scaffold-eth" target="_blank">
          🏗 scaffold-eth
        </a>
      </p>
      <p>
        If you have any questions or a feature you would like implemented, please reach out to me on Twitter at{" "}
        <a href="https://twitter.com/DanieleSalatti" target="_blank">
          @DanieleSalatti
        </a>
        .
      </p>
      <p>
        You can also find the code for this project{" "}
        <a href="https://github.com/DanieleSalatti/op-delegation" target="_blank">
          on GitHub
        </a>
        .
      </p>
    </Footer>
  );
}
