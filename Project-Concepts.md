# Portfolio Website --- Learning Notes

A phase-wise quick-reference for the concepts learned while building a
**Dark Developer Portfolio** using Next.js, React, TypeScript, Tailwind
CSS, Lucide React, and Framer Motion.

------------------------------------------------------------------------

## Tech Stack

-   **Next.js** --- React framework with routing, layouts, server/client
    components, and optimized application structure.
-   **React** --- Component-based UI library used to break the portfolio
    into reusable sections.
-   **TypeScript** --- Adds static typing and better developer tooling
    to JavaScript.
-   **Tailwind CSS** --- Utility-first CSS framework used to build
    responsive layouts directly in JSX.
-   **Framer Motion** --- Animation library reserved for interactive and
    motion-based UI.
-   **Lucide React** --- Reusable icon library for clean SVG-based
    icons.
-   **Geist + Geist Mono** --- Primary and developer/code-oriented
    typography.
-   **Git + GitHub** --- Version control and remote source-code
    management.
-   **Vercel** --- Deployment platform suited to Next.js applications.
-   **Backend / Database** --- Not required because this portfolio is
    static.

------------------------------------------------------------------------

# Phase 1 --- Project Setup & Skeleton

### Goal

Set up the Next.js project and create the overall portfolio structure
without building detailed UI.

### Next.js Project Setup

`create-next-app` creates the initial Next.js application with the
selected framework, TypeScript, styling, and App Router configuration.

### App Router

Next.js App Router organizes the application around the `app` directory.
Files such as `page.tsx` and `layout.tsx` have special meanings and
control the application's routes and shared structure.

### Components

Each portfolio section is placed in its own React component such as
`Home`, `About`, `Skills`, and `Projects`. This keeps the application
organized and makes individual sections easier to develop and maintain.

### Component Composition

The main `page.tsx` composes smaller components into the complete
portfolio page. Instead of putting the entire website into one large
component, the page acts as the structure that combines reusable pieces.

### Static Portfolio Architecture

Because the portfolio does not need authentication, APIs, or persistent
data, it can remain a frontend-only application. This keeps the project
simpler and lets the focus remain on frontend and React/Next.js
concepts.

------------------------------------------------------------------------

# Phase 2 --- Next.js Structure & Navigation

### `layout.tsx`

`layout.tsx` is the root layout shared by pages in the application. It
is a good place for global elements such as fonts, metadata, and the
HTML/body structure.

### `page.tsx`

`page.tsx` represents the page for a route. In this portfolio,
`app/page.tsx` represents the home route `/` and assembles all portfolio
sections.

### `{children}`

`children` represents the content rendered inside a layout. The layout
provides the common application structure while the page supplies the
specific route content.

### `globals.css`

Global CSS contains styles that apply across the application. It is
useful for global defaults such as background color, typography, smooth
scrolling, and shared behavior.

### Component Imports

Components are imported into `page.tsx` and rendered like JSX elements.
This creates a clear relationship between the page structure and
individual components.

### Path Alias --- `@/`

The `@/` alias provides a cleaner way to import files from the project
root.

Example:

``` tsx
import Navbar from "@/components/Navbar";
```

It avoids long relative paths such as `../../components/Navbar`.

### Section IDs

Each section receives a unique `id`, such as `id="projects"`. Navigation
links can target these IDs with values such as `href="#projects"`.

### Anchor Navigation

A link such as `href="#projects"` tells the browser to navigate to the
element whose ID is `projects`. This is useful for one-page portfolios
where all major sections exist on the same page.

------------------------------------------------------------------------

# Phase 3 --- Navbar

### Client Component

A component becomes a Client Component when it needs browser-side
interactivity such as state, event handlers, or certain client-only
APIs. We added `"use client"` to the Navbar because the mobile menu uses
interactive state.

### `useState`

`useState` stores changing UI state inside a React component. The Navbar
uses it to track whether the mobile navigation menu is open or closed.

### Event Handling

`onClick` allows React components to respond to user actions. We use it
for opening/closing the mobile menu and navigating to portfolio
sections.

### Conditional Rendering

The mobile menu is rendered only when `isOpen` is true. This is an
example of using component state to conditionally display UI.

### Navigation Data Array

Navigation items are stored as objects containing properties such as
`name` and `href`. Keeping navigation data separate from the JSX makes
the navigation easier to maintain.

### `.map()`

`map()` transforms every item in an array into a React element. It
allows repeated UI such as navigation links to be generated from data
instead of manually writing each element.

### React `key`

When rendering a list with `map()`, each generated element needs a
stable `key`. The key helps React identify which list item changed
during updates.

### Responsive Tailwind Classes

Tailwind responsive utilities such as `lg:flex` and `lg:hidden` allow
different UI behavior at different screen sizes. This was used to show
desktop navigation on larger screens and a menu button on smaller
screens.

### Sticky Navigation

`sticky top-0` keeps the Navbar positioned at the top while scrolling
within its scroll context. It makes navigation continuously accessible
on long portfolio pages.

### `z-index`

`z-50` controls stacking order so the Navbar stays above the page
content. Higher stacking order prevents other sections from visually
covering it.

### Backdrop Blur

`backdrop-blur` applies blur to content behind a translucent element.
Combined with a semi-transparent dark background, it creates the modern
developer-portfolio Navbar effect.

### Programmatic Scrolling

`scrollIntoView()` allows JavaScript to scroll directly to a selected
section. We used it so clicking a mobile navigation item can both close
the menu and smoothly navigate to the target section.

### `scroll-margin-top`

`scroll-margin-top` creates space above a target section when scrolling
to it. This prevents a sticky Navbar from covering the section heading
after navigation.

------------------------------------------------------------------------

# Phase 4 --- Home / Hero

### `next/font`

Next.js provides `next/font` for loading and optimizing fonts as part of
the application. We used it to configure the Geist and Geist Mono font
families.

### Font Variables

Font variables expose loaded fonts through CSS custom properties. This
lets the application use the fonts consistently through CSS and
Tailwind.

### Responsive Grid

CSS Grid and Tailwind grid utilities allow the Hero to change its layout
depending on screen size. The Hero uses a two-column layout on large
screens and a single-column layout on smaller screens.

### Flexbox

Flexbox is useful for arranging elements along a row or column. It was
used for buttons, technology tags, navigation elements, and other small
UI groups.

### Responsive Design

Responsive utility classes change layout, spacing, and typography based
on viewport size. The goal is to make the same component usable on
desktop, tablet, and mobile devices.

### Reusable Data + `.map()`

The Hero stores technologies in an array and renders them with `map()`.
This pattern avoids repetitive JSX and prepares the project for larger
data-driven sections.

### Lucide React

Lucide React provides reusable icon components instead of manually
creating SVG icons. Icons such as `ArrowRight` and `ArrowDown` were used
in Hero actions.

### Developer Visual

The terminal-style visual reinforces the portfolio's developer identity
without requiring an image or complex 3D graphics. It combines
typography, borders, and code-like content to create visual interest.

### Visual Hierarchy

The Hero uses different font sizes, weights, spacing, and colors to
establish an order of importance. The name and role are visually
stronger than supporting text and technology labels.

### CTA --- Call to Action

Buttons such as `View Projects` and `Download Resume` guide visitors
toward important actions. A good Hero should quickly communicate both
identity and the next useful action.

------------------------------------------------------------------------

# Phase 5 --- About Me & Skills

### Data-Driven UI

Instead of hardcoding every card, information is stored in arrays of
objects and rendered dynamically. This separates the content from the
presentation and makes future changes easier.

### Reusable Card Pattern

About highlights use the same visual structure for multiple pieces of
information. Reusing a consistent structure keeps the UI visually
consistent and reduces duplicated JSX.

### Dynamic Icons

Each data object can contain an icon component, which can then be
assigned to a local variable and rendered dynamically. This connects the
content data with its corresponding visual representation.

### Nested `.map()`

Skills use one `map()` to create skill groups and another `map()` inside
each group to render individual technologies. This is useful when data
has a hierarchical structure such as category → items.

### Skill Categories

Skills are grouped into categories such as Languages, Frontend, Backend,
Database, and Tools. Categorization makes a large technology list easier
for recruiters and users to scan.

### Responsive Grid

The Skills section uses responsive grid columns that change with screen
size. This allows several cards to sit beside each other on desktop
while stacking naturally on smaller screens.

### Tailwind Utility Classes

Tailwind utilities handle spacing, typography, borders, colors, layout,
and responsive behavior directly in the component. This reduces the need
for large custom CSS files.

### Avoiding Skill Percentages

Instead of claiming values such as `Java = 90%`, the portfolio lists
technologies directly. Skill percentages are subjective, while projects
can provide concrete evidence of practical experience.

### Content vs UI

The skill arrays represent **content/data**, while the JSX represents
**how that data is displayed**. Keeping these concerns conceptually
separate makes the application easier to scale.

------------------------------------------------------------------------

# Quick Mental Model

``` text
Next.js
  │
  ├── app/
  │    ├── layout.tsx
  │    ├── page.tsx
  │    └── globals.css
  │
  └── components/
       ├── Navbar
       ├── Home
       ├── About
       ├── Skills
       └── ...

React
  │
  ├── Components
  ├── Props
  ├── State
  ├── Events
  ├── Conditional Rendering
  └── map()

TypeScript
  │
  └── Safer, typed application code

Tailwind
  │
  ├── Layout
  ├── Responsive Design
  ├── Spacing
  ├── Typography
  └── Visual Styling

Lucide
  │
  └── Reusable Icons

Framer Motion
  │
  └── To be introduced when animation is needed
```

------------------------------------------------------------------------

# Key Patterns to Remember

### 1. Component Pattern

``` tsx
function Component() {
  return <section>...</section>;
}
```

Break large interfaces into smaller, focused components.

### 2. Data → Map → UI

``` tsx
items.map((item) => (
  <Card key={item.id} />
));
```

Store repeated information as data and generate the repeated UI from it.

### 3. State → Event → UI

``` tsx
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>
```

State stores changing UI information, events update the state, and React
re-renders the UI.

### 4. Responsive Design

``` text
Mobile
  ↓
Tablet
  ↓
Desktop
```

Design components so they adapt instead of creating separate websites
for each screen size.

### 5. Server vs Client

``` text
Static / no browser interaction
        ↓
Server Component

State / onClick / interactive behavior
        ↓
Client Component
        ↓
"use client"
```

Don't add `"use client"` everywhere; use it when the component actually
needs client-side interactivity.

------------------------------------------------------------------------

> **Remember:** The goal is not just to finish the portfolio. Each phase
> is intentionally designed to introduce a frontend concept that you can
> reuse in future projects.
