# RidePaddy Font Files

## Installed Fonts ✅

All required font files are already installed in this directory!

### Creato Display (Primary Font)
- ✅ `CreatoDisplay-Thin.otf` (Weight: 100)
- ✅ `CreatoDisplay-Light.otf` (Weight: 300)
- ✅ `CreatoDisplay-Regular.otf` (Weight: 400)
- ✅ `CreatoDisplay-Medium.otf` (Weight: 500)
- ✅ `CreatoDisplay-Bold.otf` (Weight: 700)
- ✅ `CreatoDisplay-ExtraBold.otf` (Weight: 800)
- ✅ `CreatoDisplay-Black.otf` (Weight: 900)

**Usage:** Headings (h1-h6), hero text, important CTAs
**CSS Variable:** `--font-creato-display`
**Utility Class:** `.font-heading`

### Montserrat (Secondary Font)
Loaded automatically from Google Fonts (no local files needed)

**Usage:** Body text, paragraphs, UI elements, navigation
**CSS Variable:** `--font-montserrat`
**Utility Class:** `.font-body`

## File Structure

```
public/fonts/
├── CreatoDisplay-Thin.otf
├── CreatoDisplay-Light.otf
├── CreatoDisplay-Regular.otf
├── CreatoDisplay-Medium.otf
├── CreatoDisplay-Bold.otf
├── CreatoDisplay-ExtraBold.otf
├── CreatoDisplay-Black.otf
├── CreatoDisplay-ThinItalic.otf
├── CreatoDisplay-LightItalic.otf
├── CreatoDisplay-RegularItalic.otf
├── CreatoDisplay-MediumItalic.otf
├── CreatoDisplay-BoldItalic.otf
├── CreatoDisplay-ExtraBoldItalic.otf
├── CreatoDisplay-BlackItalic.otf
└── README.md
```

## How Fonts Are Used

### Automatic Application
- All headings (h1, h2, h3, h4, h5, h6) automatically use Creato Display
- Body text automatically uses Montserrat
- No additional configuration needed!

### Manual Application
Use utility classes when needed:
```jsx
<h1 className="font-heading">Heading with Creato Display</h1>
<p className="font-body">Body text with Montserrat</p>
```

## Performance Notes

- OTF format is supported by all modern browsers
- Fonts are loaded with `display: swap` for optimal performance
- Fallback fonts: system-ui, sans-serif

## License

Ensure you have proper licensing for Creato Display font usage in commercial projects.
