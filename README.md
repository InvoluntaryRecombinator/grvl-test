# GRVL Landing Page & Beta Distribution

This repository contains the promotional landing page and beta distribution hub for the G.R.V.L. Chrome Extension. 

## Technical Architecture
The landing page is built to be entirely lightweight with zero build-step dependencies.
* **Frontend:** Vanilla HTML5, Vanilla JavaScript (`script.js`)
* **Styling:** Tailwind CSS (via CDN)
* **Accessibility:** Fully ARIA-compliant interactive elements (`<button role="switch">`, `aria-expanded`, keyboard navigation support)
* **Deployment:** Hosted via GitHub Pages

## Manual Beta Installation (Developer Mode)
While GRVL is preparing for the Chrome Web Store, reviewers and beta testers can install the tool locally using the provided `grvl-extension.zip` file:

1. **Download & Unzip:** Download the `grvl-extension.zip` file from this repository (or the live landing page) and extract the folder to your Desktop.
2. **Open Chrome Extensions:** Open Google Chrome, type `chrome://extensions/` into your URL bar, and hit Enter.
3. **Enable Developer Mode:** Look at the top right corner of the Extensions page and toggle **Developer mode** to ON.
4. **Load the Extension:** Click the **Load unpacked** button that appears in the top left corner. Select the unzipped folder you extracted in Step 1.
5. **Open Google Gemini:** Open a new browser tab and navigate to [gemini.google.com](https://gemini.google.com). Open a new or existing chat.
6. **Start the Loop:** Look for the new `∞` widget floating in the bottom right corner of the page. Click it, and allow Chrome access to your microphone when prompted.
7. **Customize & Test:** Click the settings icon (⚙️) to customize your trigger phrases.
