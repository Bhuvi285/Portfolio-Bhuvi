# Bhuvanesh — Developer Portfolio

A modern, responsive personal portfolio website built to showcase my skills, experience, education, certifications, projects, and developer profile.

The portfolio is designed as a single-page developer website with a clean dark/light theme, interactive UI, animations, and a 3D developer-themed visual experience.

---

## About the Project

This project is my personal developer portfolio.

It presents my journey as a **Full Stack Java Developer** and provides a central place to showcase:

- About Me
- Technical Skills
- Experience
- Projects
- Education
- Certifications
- Resume
- GitHub
- Contact Information

The website is built as a frontend-focused application without a backend or database.

---

## Purpose

The main purpose of this project is to:

- Create my personal developer portfolio
- Showcase my technical skills and projects
- Provide recruiters and developers with information about my background
- Practice modern web development technologies
- Learn Next.js and TypeScript through a real project
- Understand responsive design and modern UI development
- Implement animations and interactive experiences
- Deploy a production-ready website

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application structure |
| React | Building reusable UI components |
| TypeScript | Type-safe JavaScript development |
| Tailwind CSS | Styling and responsive design |
| Framer Motion | UI animations and transitions |
| Three.js | 3D graphics |
| React Three Fiber | Using Three.js with React |
| Drei | Helpers for React Three Fiber |
| Lucide React | Icons |
| next-themes | Light/Dark theme management |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Deployment |

---

## Main Features

### Responsive Design

The portfolio adapts to different screen sizes including:

- Desktop
- Laptop
- Tablet
- Mobile

Tailwind CSS responsive utilities are used to create layouts that work across different devices.

---

### Dark & Light Theme

The website supports both dark and light themes.

Theme colors are managed using CSS custom properties so that backgrounds, cards, borders, text, and accent colors can change consistently between themes.

---

### Interactive Navbar

The Navbar provides navigation between the different sections of the portfolio.

It includes responsive behaviour so that navigation remains usable on smaller screens.

---

### Hero Section

The Hero section introduces me as a Full Stack Java Developer.

It includes:

- Developer introduction
- Short description
- Call-to-action buttons
- Developer visual
- Animated elements

---

### About Section

The About section provides information about my development journey and interests.

It also contains an interactive developer-themed 3D visual.

---

### Skills Section

The Skills section presents the technologies and tools that I work with.

The skills are displayed using reusable UI components and technology icons.

---

### Experience Section

The Experience section presents my professional/development experience in a structured format.

A timeline-style layout is used to make the information easy to understand.

---

### Projects Section

The Projects section showcases my development projects.

Each project can contain:

- Project name
- Description
- Technologies used
- GitHub repository
- Live demo
- Project status
- Featured project indicator

---

### Education Section

The Education section presents my academic background.

It includes my degree and higher-secondary education details.

---

### Certifications Section

The Certifications section provides a place to showcase certifications and related achievements.

---

### Resume

The portfolio provides access to my resume so visitors can learn more about my education, skills, experience, and projects.

---

### GitHub Section

The GitHub section provides information about my GitHub activity and repositories.

It also links visitors to my GitHub profile and projects.

---

### Contact Section

The Contact section provides ways to connect with me.

It includes:

- Email
- LinkedIn
- GitHub

---

### Footer

The Footer contains:

- Personal branding
- Social links
- Contact link
- Back-to-top button
- Copyright information
- Technology information

---

## Interactive & Visual Features

### Three.js 3D Developer Scene

The portfolio contains an interactive 3D developer-themed scene.

Three.js is used together with React Three Fiber and Drei to create elements such as:

- 3D objects
- Floating elements
- Technology badges
- Code-editor-style interface
- Platform
- Lighting
- Camera interaction

The 3D scene adds an interactive visual element to the portfolio while keeping the main content readable.

---

### Framer Motion Animations

Framer Motion is used for UI animations throughout the website.

Examples include:

- Section reveal animations
- Hover animations
- Button interactions
- Card movement
- Scaling
- Opacity transitions
- Entrance animations

The animations are kept subtle so they support the interface rather than distracting from the content.

---

### Interactive Cursor Trail

The website includes an interactive cursor trail created using SVG.

The trail uses:

- SVG paths
- Gradients
- Opacity
- Stroke properties
- Blur filters

The cursor movement dynamically changes the SVG path to create the trail effect.

---

### Animated Background

The portfolio contains an interactive background layer behind the main content.

The background uses a network-style visual containing nodes and connections to create a developer/technology-inspired environment.

---

## Project Structure

The project follows the Next.js App Router structure.

```text
portfolio/
│
├── app/
│   ├── icon.png
│   ├── opengraph-image.png
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── Hero3D.tsx
│   ├── NetworkBackground.tsx
│   └── InteractiveBackground.tsx
│
├── public/
│   └── static assets
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
