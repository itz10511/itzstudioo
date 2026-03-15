# iTZ.STUDiOO Portfolio

Self-hosted portfolio site. Dark editorial aesthetic — no frameworks, no build tools. Just HTML, CSS, and vanilla JS.

---

## 📁 File Structure

```
itzstudioo/
├── index.html        ← Homepage
├── work.html         ← Gallery / portfolio
├── about.html        ← About & services
├── contact.html      ← Contact form
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/           ← Drop your photos here
```

---

## 🚀 Deploy to GitHub Pages (Free)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up if you don't have one.

### Step 2 — Create a new repository
1. Click the **+** icon → New repository
2. Name it exactly: `itzstudioo.com` (or any name you want)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
**Option A: via GitHub website (easiest)**
1. Open your new repo
2. Click **uploading an existing file**
3. Drag ALL your files and folders into the window
4. Click **Commit changes**

**Option B: via Git (terminal)**
```bash
cd /path/to/itzstudioo
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. In your repo, go to **Settings** → **Pages**
2. Under "Source", choose **Deploy from a branch**
3. Select **main** branch, **/ (root)** folder
4. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME`

---

## 🌐 Connect Your Custom Domain (itzstudioo.com)

### Step 1 — Add domain in GitHub Pages settings
1. Go to Settings → Pages
2. Under "Custom domain", type: `itzstudioo.com`
3. Click Save — this creates a CNAME file in your repo

### Step 2 — Update your DNS records
Log into wherever you bought/transferred your domain (GoDaddy, Namecheap, Cloudflare, etc.) and add these DNS records:

**A Records** (point @ / root domain to GitHub):
```
Type: A    Host: @    Value: 185.199.108.153
Type: A    Host: @    Value: 185.199.109.153
Type: A    Host: @    Value: 185.199.110.153
Type: A    Host: @    Value: 185.199.111.153
```

**CNAME Record** (for www):
```
Type: CNAME    Host: www    Value: YOUR_USERNAME.github.io
```

### Step 3 — Wait for DNS (up to 48 hours, usually ~30 min)
Once propagated, visit itzstudioo.com — it'll load your site!

### Step 4 — Enable HTTPS
Back in GitHub Pages settings, check **"Enforce HTTPS"** (free SSL cert via Let's Encrypt).

---

## 📸 Adding Your Photos

1. Drop your images into the `/images/` folder
2. In `work.html`, find the placeholder divs and replace them:

```html
<!-- BEFORE (placeholder) -->
<div class="grid-placeholder" style="background:#1a1a1a; height:380px;"></div>

<!-- AFTER (your photo) -->
<img src="images/your-photo.jpg" alt="Project Name" loading="lazy" />
```

**Recommended image sizes:**
- Portrait/tall: 800×1200px max
- Landscape: 1200×800px max
- Compress with https://squoosh.app before uploading (aim for under 300KB each)

---

## 🎥 Embedding YouTube Videos

In `work.html`, replace a grid item's content:

```html
<div class="grid-item" data-category="video">
  <div class="video-thumb">
    <iframe 
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
      allowfullscreen 
      loading="lazy">
    </iframe>
  </div>
  <div class="grid-caption">
    <span class="tag">Video</span>
    <p>Your Video Title</p>
  </div>
</div>
```

The video ID is the part after `?v=` in the YouTube URL.

---

## 📧 Setting Up the Contact Form

GitHub Pages is static (no server), so you need a free form service:

### Option A: Formspree (easiest, free)
1. Go to https://formspree.io and create a free account
2. Create a new form — copy your form ID (looks like `xabcdefg`)
3. In `contact.html`, change the form tag:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Done! Submissions go to your email.

### Option B: Web3Forms (also free)
1. Go to https://web3forms.com
2. Enter your email to get an access key
3. Add a hidden input inside your form:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
```
4. Change the form action:
```html
<form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
```

---

## ✏️ Customizing Content

- **Bio**: Edit `about.html` — find the `about-bio` paragraphs
- **Stats**: Update numbers in the `.stat` divs in `about.html`  
- **Social links**: Search for `href="#"` and replace with your real URLs
- **Email**: Replace `hello@itzstudioo.com` in `contact.html`
- **Services**: Edit the `.service-card` items in `about.html`
- **Colors**: All colors are CSS variables in `:root {}` at the top of `css/style.css`

---

## 💰 Cost Breakdown

| Item | Cost |
|------|------|
| GitHub Pages hosting | FREE |
| SSL certificate | FREE |
| Formspree (contact form) | FREE |
| Domain renewal (itzstudioo.com) | ~$12/year |
| **Total vs Wix** | **~$12/year instead of ~$200+/year** |
