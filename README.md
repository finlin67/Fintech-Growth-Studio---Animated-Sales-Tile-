# Fintech Growth Animated Sales Tile

This project contains a high-fidelity recreation of a fintech landing page featuring a complex, interactive data visualization component (`FinServTile`).

## Description
The core focus is the `FinServTile` component: a self-contained, 600x600 responsive React component. It features orbiting rings, floating data cards with organic motion, and SVG chart animations. The component uses Framer Motion for high-performance animations (including draggability) and Tailwind CSS for precise styling, perfectly mimicking the provided design spec.

## Tech Stack
*   **React 18+**
*   **TypeScript**
*   **Tailwind CSS** (via CDN for portability)
*   **Framer Motion** (Animation & Drag physics)
*   **Lucide React** (Icons)

## Design System & Styling

The application uses a "Cyber-Fintech" aesthetic characterized by deep space blues, neon data accents, and glassmorphism. Global styles and variables are defined in `globals.css`.

### Color Palette & CSS Variables

| Color Name | Hex Code | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Deep Space** | `#020617` | `--color-deep-space` | Main application background. |
| **Slate 900** | `#0f172a` | `--color-slate-900` | Secondary backgrounds, card bases. |
| **Growth Teal** | `#0b8aad` | `--color-primary-teal` | **Primary Brand Color**. Used for buttons, hubs, and primary highlights. |
| **Emerald** | `#10b981` | `--color-emerald` | **Success/Data**. Used for positive trends, charts, and verification ticks. |
| **Soft Blue** | `#60a5fa` | `--color-soft-blue` | **Secondary Accent**. Used for gradients, icons, and information nodes. |

### Global CSS Utility Classes

The `globals.css` file exports specific utility classes for consistent styling across the application:

*   `.bg-grid-pattern`: Generates the subtle radial grid background texture to reduce visual flatness.
    *   *Value*: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`
*   `.glass-card`: Applies the standard glassmorphism effect.
    *   *Value*: `bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-2xl`
*   `.text-gradient-primary`: Applies the high-impact text gradient used in headlines.
    *   *Value*: `text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#60a5fa]`

### Visual Effects

1.  **Glassmorphism**:
    *   Used on floating data cards to ensure readability while maintaining context with the background.

2.  **Gradients**:
    *   **Hub Glow**: Radial gradients used behind the central hub to create depth.
    *   **Chart Line**: Linear gradient from Emerald to Primary Teal for the SVG path.

## Usage
1.  Navigate to `App.tsx` to see the full landing page context.
2.  The isolated component is located at `components/FinServTile.tsx`.
3.  The tile is fully responsive but optimized for a square aspect ratio. It fits into any container but works best when given a max-width of around 600px.
4.  Try dragging the floating cards in the visualization!

## App Name
Fintech Growth Studio