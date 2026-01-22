# ALBA Music Website - Plain HTML/CSS/JS Version

This folder contains a **learning reference** version of the ALBA music website, built with vanilla HTML, CSS, and JavaScript (no frameworks).

## 📁 Files

| File | Description |
|------|-------------|
| `index.html` | The complete HTML structure with all sections |
| `styles.css` | All styling using CSS custom properties (variables) |
| `script.js` | Interactive functionality (accordion, smooth scroll, forms) |

## 🎯 Learning Goals

This code demonstrates:

### HTML
- Semantic HTML5 elements (`<section>`, `<nav>`, `<footer>`, `<main>`)
- Accessible markup with ARIA labels
- Embedded content (YouTube iframes, Spotify embed)
- SVG icons inline

### CSS
- **CSS Custom Properties** (variables) for theming
- **Flexbox** and **CSS Grid** for layouts
- **Responsive design** with media queries
- **CSS animations** with `@keyframes`
- **Hover effects** and transitions
- **BEM-like naming** convention (Block__Element--Modifier)

### JavaScript
- **DOM manipulation** with `querySelector` and `classList`
- **Event listeners** for interactivity
- **Smooth scrolling** navigation
- **Form validation**
- **Intersection Observer** for scroll animations

## 🔄 React vs Plain HTML/CSS/JS

| Concept | React Version | Plain HTML/CSS/JS |
|---------|---------------|-------------------|
| **Components** | Separate `.tsx` files | All HTML in one file |
| **State** | `useState` hook | Manual DOM updates |
| **Styling** | Tailwind CSS utilities | Traditional CSS classes |
| **Data** | JavaScript arrays/objects | Hardcoded in HTML |
| **Events** | `onClick` props | `addEventListener` |
| **Loops** | `.map()` in JSX | Written out manually |

## 🚀 How to Use

1. Open `index.html` in any web browser
2. No build step or server required!
3. Edit files and refresh to see changes

## 📝 Key Differences from React

### In React (the actual project):
```jsx
// Component-based - reusable pieces
const Track = ({ title, duration, index }) => (
  <div className="track">
    <span>{index}</span>
    <span>{title}</span>
    <span>{duration}</span>
  </div>
);

// Data-driven rendering
{tracks.map((track, i) => (
  <Track key={track.title} {...track} index={i + 1} />
))}
```

### In Plain HTML/CSS/JS:
```html
<!-- Each item written manually -->
<div class="track">
  <span class="track__number">01</span>
  <span class="track__name">Golden Hour</span>
  <span class="track__duration">3:42</span>
</div>
<div class="track">
  <span class="track__number">02</span>
  <span class="track__name">Midnight Sun</span>
  <span class="track__duration">4:18</span>
</div>
<!-- ... and so on -->
```

## 💡 Tips for Learning

1. **Inspect the React version** - Use browser DevTools to see the rendered HTML
2. **Compare the CSS** - Notice how Tailwind utilities map to traditional CSS properties
3. **Study the JavaScript** - See how React handles what we do manually here
4. **Experiment!** - Change colors, add sections, break things and fix them

---

Happy coding! 🎵
