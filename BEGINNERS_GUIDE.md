<p align="center">
  <img src="https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/logo-of-here-and-now-ai.png" alt="HERE AND NOW AI Logo" width="250">
</p>

# 🚀 Create Your Personal Portfolio Website
### *AI is Good*

Welcome! In this activity, you will learn how to take a professional portfolio template, customize it with your own information, and host it for free on the internet using GitHub Pages.

---

## 📋 Prerequisites
Before you start, make sure you have:
1. A **GitHub Account**: [Sign up here](https://github.com/join) if you don't have one.
2. **Git Installed**: [Download Git](https://git-scm.com/downloads) for your computer.
3. A **Code Editor**: We recommend [VS Code](https://code.visualstudio.com/).

---

## 🏁 Step 1: Clone the Repository
First, you need to get a copy of the template code on your computer.

1. Open your Terminal (Mac/Linux) or Command Prompt/Git Bash (Windows).
2. Type the following command and press Enter:
   ```bash
   git clone https://github.com/hereandnowai/portfolio-website-free-templates-created-by-here-and-now-ai.git
   ```
3. Move into the project folder:
   ```bash
   cd portfolio-website-free-templates-created-by-here-and-now-ai
   ```

---

## 🛠 Step 2: Customize Your Information
This project is designed so that you **only** need to edit one file to change everything.

1. Open the project folder in **VS Code**.
2. Locate and open the file named [config.js](config.js).
3. Update the fields with your personal information:
   - **`name`**: Your full name.
   - **`title`**: Your professional title (e.g., "Full Stack Developer").
   - **`tagline`**: A short sentence about what you do.
   - **`about`**: Write a few paragraphs about your background.
   - **`social`**: Links to your LinkedIn, GitHub, etc.
   - **`skills`**: A list of things you are good at.
   - **`projects`**: Details about your best work.
4. **Save the file** (`Ctrl+S` or `Cmd+S`).

> **💡 Note:** You can also replace the profile picture in `assets/images/` and update the `avatarUrl` in [config.js](config.js).

---

## 👁️ Step 3: Preview Your Site
1. Open the file [index.html](index.html) in your browser (Right-click -> Open with -> Your Browser).
2. Check if your information appears correctly. If you've made changes to `config.js`, just refresh the page to see them!

---

## 📦 Step 4: Create Your Own GitHub Repository
Now you need a place on the internet to store your code.

1. Log in to your [GitHub account](https://github.com/).
2. Click the **"+"** icon in the top right and select **"New repository"**.
3. **Repository name**: Give it a name (e.g., `my-portfolio`).
4. **Public/Private**: Keep it **Public**.
5. **CRITICAL**: Do **NOT** check "Initialize this repository with a README".
6. Click **Create repository**.

---

## ⬆️ Step 5: Push Your Code to Your Repository
Now, let's connect your local code to your new GitHub repository.

1. Go back to your terminal/command prompt.
2. Run these commands one by one:

   ```bash
   # 1. Remove the link to the original template
   git remote remove origin

   # 2. Link it to YOUR new repository
   # Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual details!
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

   # 3. Rename the branch to 'main'
   git branch -M main

   # 4. Save your changes locally
   git add .
   git commit -m "Initialize my personal portfolio"

   # 5. Push your code to GitHub
   git push -u origin main
   ```

---

## 🌐 Step 6: Publish to the Web (GitHub Pages)
Your code is now on GitHub, but let's make it a live website!

1. In your GitHub repository page, click on **Settings** (top tab).
2. On the left sidebar, click on **Pages**.
3. Under **Build and deployment > Branch**:
   - Select **`main`** from the dropdown.
   - Ensure the folder is set to **`/(root)`**.
4. Click **Save**.
5. Wait about 1-2 minutes. Refresh the "Pages" settings page, and you will see a link: 
   *"Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"*

---

## 🎉 Congratulations!
You now have your own professional portfolio website live on the internet! Share that link with your friends or add it to your resume.

---

## 🤝 Need Help? Connect with Us

If you run into any issues or want to learn more about AI and web development, reach out to **HERE AND NOW AI**.

- **Website**: [hereandnowai.com](https://hereandnowai.com)
- **LinkedIn**: [HERE AND NOW AI](https://www.linkedin.com/company/hereandnowai/)
- **X (Twitter)**: [@hereandnow_ai](https://x.com/hereandnow_ai)
- **Instagram**: [@hereandnow_ai](https://instagram.com/hereandnow_ai)
- **Email**: [info@hereandnowai.com](mailto:info@hereandnowai.com)
- **Phone**: +91 996 296 1000
