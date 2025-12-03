# Animals — React Practice Project

A small React/Vite practice project that displays a collection of animals. Click "Add Animal" to append a random animal tile. Each tile shows an SVG image and a heart icon that grows when clicked.

**Key features**

- Add random animals to the list
- Click animal tiles to increment a heart icon size
- Styled using `styled-components`

**Tech stack**

- React (functional components + hooks)
- Vite (dev server & bundling)
- styled-components for styling

Project structure (important files)

- `src/App.jsx` — Main application, adds animals and renders the list
- `src/Animals.jsx` — Animal tile component (image + heart counter)
- `src/App.js` — Styled components exported for layout (`AppContainer`, `AddAnimalButton`, `AnimalListContainer`)
- `src/Animals.js` — Styled components for the animal tile (`AnimalContainer`, `AnimalImage`, `HeartIcon`)
- `src/images/Images.js` — Image/SVG mapping and assets used by `Animals.jsx`

Getting started

1. Install dependencies (from the `animals` folder):

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app in your browser (Vite usually serves at `http://localhost:5173`).

Notes

- Images and SVGs are imported from `src/images` and referenced via an images mapping file; do not rely on raw relative string paths in `src` files — import them so Vite can bundle them correctly.
- Styled components are exported as named exports from `src/App.js` and `src/Animals.js`; when consuming those symbols, use a namespace import (`import * as Styled from './App.js'`) or import the specific named exports.

Contributing

- Open a PR with fixes or improvements. Keep changes focused and run the dev server to verify UI behavior.

License

- MIT (or change to your preferred license)
