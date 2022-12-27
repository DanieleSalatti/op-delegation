import React from "react";

export default function Stats() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", margin: 24 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            If you don't see the stats, it's likely because your browser or an extension is blocking the iframe.
            <br />
            The service I use (
            <a href="https://plausible.io/" target="_blank" rel="noreferrer">
              plausible.io
            </a>
            ) is <a href="https://plausible.io/data-policy">very privacy-focused</a>, open-source, and I only use it to
            get usage statistics (e.g. number of visitors).
          </span>
        </div>
      </div>
      <iframe
        plausible-embed
        src="https://plausible.io/share/delegation.tools?auth=o1E4IlMWQA8VIu0QFJ5n7&embed=true&theme=system"
        scrolling="yes"
        frameborder="0"
        loading="lazy"
        width={window.innerWidth}
        height={1700}
      ></iframe>
      <script async src="https://plausible.io/js/embed.host.js"></script>
    </div>
  );
}
