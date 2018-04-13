import React from "react";

const normalizeChildren = children =>
  !children ? [] : Array.isArray(children) ? children : [children];

export default (fragment, section = fragment.props.section || "") =>
  normalizeChildren(fragment.props.children).map((slide, i) =>
    React.cloneElement(slide, {
      key: `${section ? `section:${section}-` : ""}slide:${i}`
    })
  );
