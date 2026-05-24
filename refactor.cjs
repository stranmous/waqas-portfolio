const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

// Update imports
code = code.replace(
  'import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";',
  'import { AnimatePresence, m, LazyMotion, domAnimation, useScroll, useSpring } from "framer-motion";'
);

// Replace motion. with m.
code = code.replace(/<motion\./g, '<m.');
code = code.replace(/<\/motion\./g, '</m.');

// Wrap the main app return
code = code.replace(
  '  return (\n    <div className="app-container">',
  '  return (\n    <LazyMotion features={domAnimation}>\n    <div className="app-container">'
);

// Close the LazyMotion wrapper at the end of the App component
code = code.replace(
  '    </div>\n  );\n}\n\nfunction ProjectCard',
  '    </div>\n    </LazyMotion>\n  );\n}\n\nfunction ProjectCard'
);

fs.writeFileSync('src/App.tsx', code);
console.log("Refactoring complete");
