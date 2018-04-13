# make-a-spectacle
A single function for allowing you to write modular Spectacle sections like React, but return the arrays Spectacle wants.

## Installation

**NPM**
```bash
npm install make-a-spectacle
```

**Yarn**
```bash
yarn add make-a-spectacle
```

## Usage

```jsx
// /src/presentation-sections/some-section.jsx
import React from "react";
import { Slide } from "spectacle";
import makeASpectacle from "make-a-spectacle";

export default makeASpectacle(
  <div section="some-section">
    <Slide>slide 1</Slide>
    <Slide>slide 2</Slide>
    <Slide>slide 3</Slide>
  </div>
);
```

```jsx
// /src/presentation.js
import React from "react";
import { Deck } from "spectacle";
/* import ... */
import {
  SomeSection,
  OtherSection,
} from "presentation-sections";

<Deck>
  {SomeSection}
  {OtherSection}
</Deck>
```

#### Keys

Each slide will be given a suitable key. If the `section` key is added to the wrapping element, the section name will be added to the element key (to allow for concatenation of arrays of slide sections).

#### Wrapping Element

The wrapping element is just there to prevent the pain of remembering to add a comma after each slide in an array.
Spectacle has a `SlideSet` element, which I would avoid (for now), as it throws errors if a section has only one `Slide` in it (due to React being inconsistent with `element.props.children`).
`React.Fragment` is another option, but it throws errors if you add any properties to it, aside from `key`.

If you would like to use `React.Fragment`, the function has a second parameter (defaults to `el.prop.section || ""`) for the section name.

```jsx
export default makeASpectacle(
  <React.Fragment>
    <Slide>slide 1</Slide>
    <Slide>slide 2</Slide>
    <Slide>slide 3</Slide>
  </React.Fragment>
  , "other-section"
);
```
Keep in mind: for Spectacle to work, there must be a minimum of 2 slides as children.