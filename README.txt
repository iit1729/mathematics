IIT1729 website - deployment guide

1. REPLACE these 5 placeholders (use Find and Replace in all .html, .xml, .txt files):
   YOUR-DOMAIN     -> your domain, e.g. iit1729.in (no https://)
   91XXXXXXXXXX    -> WhatsApp number with country code, e.g. 919876543210
   +91 XXXXXXXXXX  -> same number, as shown on the page
   YOUTUBE_URL     -> full link of your YouTube channel
   FACEBOOK_URL    -> full link of your Facebook page

2. DEPLOY (free, easiest): open app.netlify.com/drop and drag this whole folder.
   - The enquiry form works automatically on Netlify. Enable email alerts under Site > Forms > Notifications.
   - Add your domain under Domain management.
   Other hosts: Cloudflare Pages or GitHub Pages also work, but the form needs a service such as Formspree
   (set the form's action to the URL it gives you).

3. AFTER GOING LIVE: submit the site in Google Search Console (add sitemap.xml) and test the enquiry form once.

FILES: index.html (structure), style.css (design), script.js (mobile menu, year, form sending).
GITHUB PAGES: upload all files, then Settings > Pages. For the enquiry form, set the form action in index.html to your
Formspree link (script.js then sends it without leaving the page). Remove the Netlify-only lines if not using Netlify.
