# Remove Dynamic Watermarks from Embedded Widgets

## Overview

Some embedded widgets add unnecessary branding or watermarks, which might not align with the design or purpose of your website. This repository explains how to dynamically remove such watermarks using JavaScript, specifically focusing on widgets like those provided by Elfsight.

This solution uses a `MutationObserver` to monitor and remove watermarks added dynamically to the DOM, ensuring a clean and professional appearance for your website.

---

## Why Is This Helpful?

1. **Professional Appearance**  
   Unwanted watermarks can distract users and undermine the professional look of your site. Removing them ensures that your branding remains front and center.

2. **Customization**  
   It allows you to control the visual elements on your site, maintaining consistency with your design language.

3. **Open Source Flexibility**  
   This solution empowers developers to retain full control over embedded widgets and adapt them to their needs.

---

## How It Works

This method leverages JavaScript to monitor the DOM and remove watermarks as soon as they are injected. It specifically targets dynamically loaded elements.

### Code Example

Here’s a ready-to-use JavaScript snippet:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const watermark = document.querySelector('a[href*="elfsight.com"]');
    if (watermark) {
      watermark.remove(); // Completely remove the watermark
      observer.disconnect(); // Stop observing once the watermark is removed
    }
  });

  // Start observing the body for DOM changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
```

### How to Use

1. Add this code snippet to your website's JavaScript file or inline `<script>` tag.
2. Ensure the script is loaded after the embedded widget.
3. Reload your page, and the watermark should no longer appear.

---

## Limitations

- **Legal and Ethical Considerations**  
   Before using this solution, ensure that removing the watermark complies with the widget provider's terms of service.

- **Dynamic Updates**  
   If the widget provider changes how they add the watermark, you might need to adjust the script.

---

## Contribution

Feel free to contribute by:
- Suggesting improvements to the script.
- Adding use cases for other widgets or platforms.
- Reporting any issues you encounter.

---

## Disclaimer

This script is provided as-is. Use it responsibly and ensure that you are not violating any terms of service by removing the watermark. The repository is intended for educational purposes only.
