import React from "react";

export default function Stats() {
  return (
    <div>
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
