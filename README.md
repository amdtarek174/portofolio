# 💼 Ahmed Tarek Abdellatif — Portfolio

A modern, responsive portfolio website built with **Vite + React + TypeScript**, deployed to **GitHub Pages** with automated CI/CD.

![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?logo=github&logoColor=white)

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- [Git](https://git-scm.com/) installed

### Steps

```bash
# 1. Clone this repository (or download the zip)
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173/portfolio/** in your browser. 🎉

> **Tip:** The dev server supports hot module replacement — edits to `src/App.tsx` appear instantly!

---

## 📦 Deploy to GitHub Pages (Automated)

This project includes a GitHub Actions workflow that **automatically builds and deploys** your site on every push to `main`.

### Step-by-Step

#### 1. Create a GitHub Repository

Go to [github.com/new](https://github.com/new) and create a new repository.
- Name it `portfolio` (or any name you like — see Step 2)
- Make it **Public** (required for free GitHub Pages)

#### 2. ⚠️ Update the Base Path (IMPORTANT!)

Open `vite.config.ts` and change `'portfolio'` to **your repository name**:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/',  // ← Change this!
})
```

Also update the `<script>` tag in `index.html`:

```html
<script type="module" src="/YOUR-REPO-NAME/src/main.tsx"></script>
```

> **Example:** If your repo is `my-site`, use `base: '/my-site/'` and `src="/my-site/src/main.tsx"`.

#### 3. Push Your Code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

#### 4. Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. That's it! The workflow will run automatically.

#### 5. Wait for Deployment

- Go to the **Actions** tab to watch the build progress
- Once complete, your site is live at:
  ```
  https://YOUR_USERNAME.github.io/YOUR-REPO-NAME/
  ```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Manual deploy via `gh-pages` package (alternative to Actions) |

---

## 🌐 Custom Domain (Optional)

Want to use your own domain (e.g., `ahmedtarek.dev`)?

### Steps

1. **Update `vite.config.ts`** — change `base` to `'/'`:
   ```ts
   base: '/',
   ```

2. **Update `index.html`** — change the script src:
   ```html
   <script type="module" src="/src/main.tsx"></script>
   ```

3. **Update `public/404.html`** — change `pathSegmentsToKeep` to `0`:
   ```js
   var pathSegmentsToKeep = 0;
   ```

4. **Add a `CNAME` file** in the `public/` folder:
   ```
   ahmedtarek.dev
   ```

5. **Configure DNS** with your domain registrar:
   - Add a `CNAME` record pointing to `YOUR_USERNAME.github.io`
   - Or add `A` records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

6. **Enable HTTPS** in GitHub repo → Settings → Pages → Enforce HTTPS ✅

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   └── 404.html                # SPA routing for GitHub Pages
├── src/
│   ├── App.tsx                 # Main portfolio component
│   ├── main.tsx                # React entry point
│   └── vite-env.d.ts           # Vite type declarations
├── .gitignore
├── index.html                  # Vite entry HTML
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## ✏️ Customization

All portfolio content lives in **`src/App.tsx`**. Edit these sections:

| Section | What to Change |
|---------|---------------|
| `stats` array | Your key metrics |
| `skills` array | Your tech stack |
| `projects` array | Your project cards |
| `experience` array | Your work history |
| Hero section JSX | Name, title, contact info, links |
| Education/Certs JSX | Your academic background |

The site supports **light/dark mode** out of the box with the toggle button.

---

## 📝 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Built with ☕ and code
