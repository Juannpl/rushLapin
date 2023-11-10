function bunnyroad(instructions: string[]): {
  x: number;
  y: number;
} {
  // Your function implementation goes here

  // Example implementation:
  let x = 0;
  let y = 0;

  for (const instruction of instructions) {
    switch (instruction) {
      case "nord":
        y++;
        break;
      case "sud":
        y--;
        break;
      case "gauche":
        x--;
        break;
      case "droite":
        x++;
        break;
      // Handle other instructions as needed
    }
  }

  // Return the final position
  return { x, y };
}

const instructions = [
  "droite",
  "droite",
  "gauche",
  "droite",
  "nord",
  "sud",
  "nord",
];
const positionFinale = bunnyroad(instructions);
console.log(
  `Le lapin est à la position (${positionFinale.x}, ${positionFinale.y})`
);
