# Oluwaseun Olaniran — Professional Portfolio

A complete responsive portfolio for a software engineer, web developer and Python expert. Built with HTML, CSS and vanilla JavaScript. No Node.js, database, API keys or build step required.

## Open on your Windows computer

1. Download and extract `Oluwaseun-Portfolio.zip` (right-click > Extract All).
2. Open the extracted `Oluwaseun-Portfolio` folder.
3. Double-click `index.html` to view the portfolio in your browser.
4. Open the folder in VS Code to edit it.

For a local development server, open PowerShell inside that folder and run:

```powershell
py -m http.server 8003 --bind 127.0.0.1
```

Open http://localhost:8003 in your browser. Keep the terminal open; press Ctrl+C to stop it. If the `py` launcher is unavailable but Python is installed, use `python` instead.

Google Fonts load when you have internet access. System fonts provide an offline fallback. All illustrations and certificates are included locally.

## Updated version

Includes the original Careloop preview and the StudyRPG landing-page screenshot, a light/dark toggle that remembers your preference, and larger text with stronger contrast. See `DEPLOYMENT.md` for the requested GitHub branch and Vercel workflow. GitHub Pages below is an optional alternative.

## Publish on GitHub Pages (browser method)

This package has NOT yet been published to GitHub. No GitHub account was authenticated in the build environment.

Your previously supplied GitHub username is `Lyzus243`. The steps below assume you are publishing to that account.

1. Sign into GitHub and create a NEW public repository called `portfolio`. If it already exists, choose another unused name; do not overwrite an existing project.
2. In the repository, choose **uploading an existing file** (or **Add file > Upload files**).
3. Drag the CONTENTS of the extracted folder into GitHub: `index.html`, `styles.css`, `script.js`, `README.md`, and the entire `assets` folder. Do not upload only the ZIP, and do not add an extra outer folder above index.html.
4. Commit the upload to `main`.
5. Open the repository's **Settings > Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Select **main** and **/(root)**, then Save.
8. Wait for the deployment to complete. GitHub Pages settings will show the actual published URL. For the repository/account above, the expected URL is `https://lyzus243.github.io/portfolio/`. This is an expected address, not a claim that it is currently live.

Official GitHub guide: https://docs.github.com/en/pages/quickstart

## Publish with Git (PowerShell)

Create a NEW EMPTY public repository named `portfolio` in your GitHub account first. Do not initialise that remote repository with a README, licence or .gitignore. Open PowerShell in this extracted folder, then run:

```powershell
git init
git add .
git commit -m "Build professional portfolio"
git branch -M main
git remote add origin https://github.com/Lyzus243/portfolio.git
git push -u origin main
```

Complete GitHub sign-in when Git prompts. Never put a GitHub token or password in the source files. If Git asks for commit identity, configure your own Git user.name and Git user.email, then repeat the commit. After pushing, enable Pages using steps 5–8 above.

For an existing repository, do not run these initialisation commands blindly. Clone it first and review its existing files before applying changes.

## Get a local copy after publishing

```powershell
git clone https://github.com/Lyzus243/portfolio.git
cd portfolio
py -m http.server 8003 --bind 127.0.0.1
```

Then open http://localhost:8003.

## Make updates

- `index.html`: names, main copy, services, work ethics, credentials and contact links.
- `styles.css`: colours, spacing, typography and responsive layouts.
- `script.js`: project details, mobile menu, theme toggle and copy-email behaviour.
- `theme.js`: applies the saved light/dark preference before the page renders.
- `assets/projects/`: project image assets.
- `vercel.json`: static-site deployment settings.
- `DEPLOYMENT.md`: new Git branch and Vercel instructions.
- `assets/certificates/`: original certificate PDFs supplied by the owner.
- `assets/favicon.svg`: browser tab icon.

After editing a Git-connected copy:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages republishes from the selected branch.

## Content and contact behaviour

- Three years of website-building experience is included as supplied by the owner.
- Featured projects: Careloop and StudyRPG. Careloop uses the original illustrated dashboard preview, as requested. StudyRPG uses the supplied landing-page screenshot; click it to open the full-size original.
- Careloop links to https://www.mycareloop.com.ng.
- StudyRPG links to the previously supplied https://github.com/Lyzus243/Studyrpg2 repository. Public availability of those project destinations could not be verified from this environment.
- Four supplied certificates are included with their printed Coursera verification links. These are three professional certificates and one individual course certificate; they are not presented as university degrees.
- Email buttons open the visitor's configured email application, addressed to oreoluwaoluwaseun21@gmail.com. The visitor sends the email; the site does not silently send mail.
- WhatsApp opens a prepared project enquiry to +234 816 581 8094. The visitor presses Send.
- No contact messages, analytics or personal data are stored by this static website.

## Verification completed

- Desktop visual review.
- Narrow mobile frames: 390px and 320px; no page-level horizontal overflow after fixes.
- Mobile menu opens and links navigate to the selected section.
- Both project detail dialogs open and close.
- Copy-email feedback confirmed.
- Local assets and certificate targets validated; JavaScript syntax checked.
- GitHub publishing remains pending account access or the owner's local upload.
