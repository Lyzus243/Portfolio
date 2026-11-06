# Push a new branch and host on Vercel

## 1. Update your local files

Extract the new ZIP. Copy its contents into your existing portfolio folder, replacing the earlier portfolio files. Keep your existing `.git` folder if the project already uses Git. Open a terminal in the folder containing `index.html`.

If you are using PowerShell, open the folder in File Explorer, type `powershell` in the address bar, and press Enter.

Run your local preview:

```powershell
py -m http.server 8003 --bind 127.0.0.1
```

Visit http://localhost:8003 and press Ctrl+F5 to reload the latest styles and scripts. Stop the server with Ctrl+C before entering the following commands in the same terminal, or use another terminal.

## 2. Prepare Git and create a branch

For an existing Git project, skip `git init`. For a freshly extracted folder with no Git history, run `git init` once.

```powershell
git init
git switch -c feat/portfolio-refresh
git status
```

If that branch already exists, use `git switch feat/portfolio-refresh` instead. Review the output of `git status` so you know what is being committed.

```powershell
git add index.html styles.css script.js theme.js assets vercel.json .gitignore .vercelignore .nojekyll README.md DEPLOYMENT.md
git commit -m "Add project screenshots, theme toggle and clearer typography"
git remote -v
```

If `origin` already points at your portfolio repository, keep it. If no `origin` exists, create a NEW empty GitHub repository named `portfolio` (or another unused name), then run the following, replacing the URL with the repository URL GitHub gives you:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Now push the branch:

```powershell
git push -u origin feat/portfolio-refresh
```

This uploads a new branch; it does not merge it into main. No force push is required. If the destination already has files and you are working from a fresh ZIP, clone that repository first, create the branch in the clone, copy these portfolio files into it, and commit there so the existing history is preserved.

## 3. Deploy from the terminal

Install Node.js LTS from https://nodejs.org if `node --version` and `npm --version` do not work. Then, from the portfolio folder:

```powershell
npm install -g vercel
vercel login
vercel --prod
```

Complete the login in your browser. At setup, choose your own Vercel account, create a new project (unless you already have a portfolio project), and use `./` as the project directory. The included `vercel.json` configures a static site with no build step.

If prompted for settings:

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Root directory | Folder containing index.html |
| Build command | None / leave empty |
| Output directory | . |
| Install command | None / leave empty |
| Environment variables | None needed |

Wait for the successful deployment and open the Production URL Vercel prints. Do not assume any URL is live before Vercel reports success. `--prod` deploys the code in the current local folder to production, even when your Git branch is a feature branch.

If PowerShell blocks `npm.ps1` or `vercel.ps1`, use `npm.cmd install -g vercel`, `vercel.cmd login`, and `vercel.cmd --prod` instead. No execution-policy change is needed.

## 4. Automatically redeploy from GitHub (optional)

In Vercel, connect the project to your GitHub repository under the project's Git settings. Alternatively, use Add New > Project to import the repository instead of creating a second CLI project. Keep the static settings above.

A push to a non-production branch usually creates a Preview deployment. To make `feat/portfolio-refresh` the ongoing production source, select it in the project's Settings > Environments > Production branch configuration, then deploy the latest commit. Alternatively, open and merge a pull request into your normal production branch (commonly `main`).

After Git integration is configured, future pushes to the configured production branch trigger production deployments. If using CLI only, repeat `vercel --prod` after changes.

## Sources

- https://vercel.com/docs/cli/deploy
- https://vercel.com/docs/git
- https://vercel.com/docs/builds/configure-a-build
- https://vercel.com/kb/guide/can-i-use-a-non-default-branch-for-production

## Status

The source files are prepared and locally checked. No GitHub push or Vercel deployment has been performed from this chat. Vercel was connected, but its deployment controls were not exposed in this session. GitHub remains unauthenticated here. The terminal steps above can complete deployment from your computer.
