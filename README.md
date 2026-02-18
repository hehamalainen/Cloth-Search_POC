# Cloth Search POC (Proof of Concept)

A proof-of-concept clothing search application using Fuse.js for fuzzy searching. Features a modern, responsive design with dark mode support.

## Available Versions

This application is available in multiple languages:

- **Finnish (Original)**: `index.html` - Vaatehaku POC
- **German**: `index-de.html` - Kleidungssuche POC

## Features

- 🔍 **Fuzzy Search**: Powered by Fuse.js for intelligent, typo-tolerant searching
- 🌓 **Dark Mode**: Toggle between light and dark themes with persistent preferences
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop using Tailwind CSS
- 🎨 **Style Categories**: Search by clothing styles (Gothic, Grunge, Coquette)
- 🏷️ **Product Types**: Filter by clothing types (dresses, jeans, shirts, etc.)

## Usage

### Running Locally

1. Clone the repository
2. Open the desired language version in a web browser:
   - Finnish: Open `index.html`
   - German: Open `index-de.html`

### Using a Local Server

```bash
# Python 3
python3 -m http.server 8000

# Then visit:
# Finnish: http://localhost:8000/index.html
# German: http://localhost:8000/index-de.html
```

## Technologies

- **Fuse.js**: Fuzzy search library
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No framework dependencies

## Localization

### Language-Specific Features

Each localized version includes:
- Translated UI elements (labels, buttons, messages)
- Translated product data
- Culturally appropriate formatting (e.g., price formats)
- Proper HTML language attributes for accessibility

### German Version Specifics

- Price format: `89,90 €` (German standard with comma as decimal separator)
- Style names adapted where appropriate (e.g., "Gothic" instead of "Gothik")
- All UI text and messages in German
- HTML `lang` attribute set to `"de"`

## Project Structure

```
Cloth-Search_POC/
├── index.html          # Finnish version (original)
├── index-de.html       # German version
└── README.md          # This file
```

## Development

This is a static HTML application with no build process required. All dependencies are loaded from CDN.

### Mock Data

The application currently uses hardcoded mock data for demonstration purposes. Product data is defined in the JavaScript section of each HTML file.

## License

This is a proof-of-concept project for demonstration purposes.
