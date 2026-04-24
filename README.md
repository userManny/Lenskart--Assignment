# Lenskart Clone (Frontend Assignment)

This project is a frontend implementation of a Lenskart-inspired webpage built using HTML, CSS, and JavaScript.  
It focuses on layout design, styling, and implementing a basic image slider.

---

## Features
- Structured webpage using semantic HTML
- Custom fonts using @font-face
- Flexbox-based layouts
- Image slider with next/previous navigation
- Auto-sliding carousel
- Section-based UI:
  - Our Purpose
  - Vision
  - Features (Slider)
  - For Everyone (Cards)
  - Purpose (Grid Layout)
  - Footer

---

## Project Structure
project/
|-- index.html      # Main HTML structure
|-- style.css       # Styling and layout
|-- script.js       # Slider functionality
`-- images/         # Image assets (img1 → img10)

---

## Sections Overview

### Our Purpose
- Hero section with text and image
- Split layout using Flexbox

### Vision
- Center-aligned content
- Background color section

### Features (Slider)
- Image slider showing one slide at a time
- Controlled using JavaScript
- Includes auto-slide feature

### For Everyone
- Three cards displayed using Flexbox
- Represents different usage modes

### Purpose Section
- Two-row layout
- Alternating text and image blocks
- Implemented using Flexbox

### Footer
- Background image section

---

## JavaScript Functionality

### Slider
- Shows one slide at a time using `active` class
- Next/Previous button functionality
- Circular navigation using modulo operator:
index = (index + 1) % slides.length;

- Auto-slide feature using setInterval

---

## Key Concepts Used
- HTML structuring
- CSS Flexbox
- Custom fonts
- DOM manipulation
- Event handling
- Basic animation logic

---

## How to Run
1. Download or clone the project
2. Open index.html in a browser

---

## Learning Outcomes
- Building structured UI layouts
- Using Flexbox for layout design
- Applying custom fonts
- Creating an image slider from scratch
- Understanding DOM manipulation and events

---

