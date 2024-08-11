const customRender = (reactElement, container) => {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);

  // loop for seting all attributes
  for (const prop in reactElement.props) {
    if (prop === "children") continue;

    const value = reactElement.props[prop];
    domElement.setAttribute(prop, value);
  }

  container.appendChild(domElement);
};

const reactComponent = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactComponent, mainContainer);
