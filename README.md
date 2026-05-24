# Waqas's Portfolio

*Live at: [waqas.codes](https://waqas.codes)*

Hey there! Welcome to the source code for my personal portfolio. I built this site to share a bit about myself and some of the projects I've been working on. I wanted to try out some fun ideas, so I added a 3D phone model, smooth scroll animations, a hidden retro mini-game, and a serverless contact form powered by FormSubmit. I tried to keep the performance as snappy as possible. Feel free to look around the code!

## 🚀 Features

**Interactive 3D Experience**
A custom 3D smartphone rendered in real-time using Three.js and React Three Fiber. The model responds to mouse movements.

**Physics Animations**
Smooth scroll animations, cursor tracking, and layout transitions powered by Framer Motion.

**Hidden Easter Egg**
A functional mini-game embedded directly into the UI. It runs in an isolated WebGL iframe sandbox.

**Contact Integration**
A seamless contact form connected to FormSubmit for direct email routing without needing a backend server.

**Responsive Design**
A fluid UI built with modern CSS variables, CSS Grid, and Flexbox that looks good on both desktop monitors and mobile devices.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React 19 + Vite |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Vanilla CSS |
| **3D Graphics** | `three`, `@react-three/fiber`, `@react-three/drei` |
| **Animations** | `framer-motion` |
| **Forms / API** | FormSubmit (Serverless Email Routing) |
| **Icons** | `lucide-react`, `react-icons` |

## ⚡ Performance Optimizations

Getting the 3D canvas and animations to load smoothly on mobile devices required a bit of tuning. Here is how I tried to keep the Lighthouse scores high:

**Code Splitting**
The 3D engine is heavy, so it is completely isolated into its own JavaScript chunk that only loads when needed.

**Delayed Mounting**
To prevent the main thread from blocking, the 3D canvas is delayed by 1.5 seconds on the initial load. This lets the HTML and CSS render instantly.

**LazyMotion Architecture**
Framer Motion's core animation engine is lazy-loaded asynchronously, which cuts down the initial payload size.

**Asynchronous Font Loading**
Google Fonts are preloaded and fetched asynchronously to avoid render-blocking, making sure the first paint happens immediately.

**GPU Compositing**
Continuous animations like the glowing effects are restricted to transform, opacity, and filter properties to avoid expensive layout repaints.

## 📝 License

Feel free to draw inspiration from the design and code architecture, but please do not copy the project structure verbatim or use my personal identity/projects for your own portfolio.
