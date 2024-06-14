# Noir Soir

This project is a part of my bachalor final work. I created a detective game where players can accuse suspects and watch the story unfold. The end scene involves a 3D environment where players can interact with characters and choose who they believe is the killer.

## Table of Contents

- [Installation](#installation)
- [Gettingstarted](#gettingstarted)
- [Features](#Features)
- [Pages](#pages)
- [Dependencies](#dependencies)
- [Requirements](#requirements)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/biekeb/bachelor-proef.git
   cd bachelor-endproject
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm start
   ```

## Getting Started

To play the game, simply follow these steps:

1. Open your preferred web browser.
2. Navigate to the game's URL.
3. Wait for the game to load.
4. Start playing!

## Features

- **3D Environment**: Explore a fully rendered 3D environment using Three.js and react-three-fiber.
- **Interactive Characters**: Interact with characters Vincent, Anthony, and Isabella, each with their own animations.
- **Clue Collection**: Collect clues throughout the game to help determine the killer.
- **Dynamic Music**: Background music that starts and stops based on game events.
- **Inventory System**: Press 'I' to toggle the inventory, showing collected clues.
- **Tutorial Screen**: An initial tutorial screen to help players get started with the game.
- **Post-processing Effects**: Enhanced visual effects using post-processing like Bloom, DepthOfField, Noise, and ColorAverage.
- **Character Interrogation Scene**: Interrogate Characers with a dynamic conversation tree.

## Pages

### / (Homepage)

The entry point of the application where users can get an overview of the game, start a new game, or continue from a saved state.

### /app (The Game)

This is the main game interface where players can explore the game world, interact with various elements, and gather clues.

### /isabella | /vincent | /anthony (Interrogation Scenes)

Individual pages where players can interrogate the suspects:

- **/isabella**: Interrogate Isabella to gather more information and determine her alibi.
- **/vincent**: Question Vincent to uncover his potential motives and involvement.
- **/anthony**: Cross-examine Anthony to piece together his actions and connections to the crime.

### /end (Accusation Scene)

The final scene where the player reviews the gathered evidence and makes the final decision on who the killer is. The chosen suspect is then presented with the accusation.

## Dependencies

```json
"dependencies": {
  "@react-three/cannon": "^6.6.0",
  "@react-three/drei": "^9.97.0",
  "@react-three/fiber": "^8.15.16",
  "@react-three/postprocessing": "^2.16.2",
  "@react-three/rapier": "^1.2.1",
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "dat.gui": "^0.7.9",
  "drei": "^2.2.21",
  "gsap": "^3.12.5",
  "leva": "^0.9.35",
  "lil-gui": "^0.19.2",
  "maath": "^0.10.7",
  "postprocessing": "^6.35.4",
  "r3f-perf": "^7.1.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router": "^6.21.3",
  "react-router-dom": "^6.21.3",
  "react-scripts": "5.0.1",
  "react-three-fiber": "^6.0.13",
  "sweetalert2": "^11.11.0",
  "three": "^0.161.0",
  "use-cannon": "^0.5.3",
  "web-vitals": "^2.1.4",
  "zustand": "^4.5.0"
}
```

## Requirements

To play the game, you need:

- A modern web browser (Chrome, Firefox, Safari, etc.).
- Stable internet connection.

## Contributing

I welcome contributions from the community. If you have any suggestions, bug reports, or feature requests, please submit them through the issue tracker on the GitHub repository.

## License

This game is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and distribute it as per the terms of the license.

```

```
