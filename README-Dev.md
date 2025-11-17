# Developer Documentation

This is the repository for the static website for [TulipaEnergy](https://github.com/TulipaEnergy).

Published Website: https://clizbe.github.io/tulipa-website/

It is built using [Vuetify](https://vuetifyjs.com/) and published through Github Pages.

# Development Documentation for New Contributors

Welcome to the project! This document provides a clear overview of how to set up, run, and contribute to the website built with **Vue 3**, **Vuetify**, and **npm**.

# Development Documentation for New Contributors

Welcome to the project! This document provides a clear overview of how to set up, run, and contribute to the website built with **Vue 3**, **Vuetify**, and **npm**.

## 🚀 Getting Started

### **Prerequisites**

Before you begin, make sure you have:

* **Node.js** (LTS version recommended)
* **npm** (comes with Node.js)
* A code editor (VS Code recommended)
* Git installed

### **1. Clone the Repository**

```bash
git clone https://github.com/clizbe/tulipa-website
cd <project-folder>
```

### **2. Install Dependencies**

```bash
npm install
```

This installs all packages listed in `package.json`.

### **3. Start the Development Server**

```bash
npm run dev
```

This launches the local dev server. Click the localhost link that is generated to view live updates as you work.

---

## 🧱 Project Structure

The basic project structure:

```
project-root/
│  package.json
│  vite.config.mjs
│  README.md
│
├─ src/
│   ├─ assets/      
│   ├─ components/  Content blocks
│   ├─ layouts/     
│   ├─ pages/       Web pages - combine content blocks
│   ├─ plugins/     (admin) Vuetify setup, global config
│   ├─ router/      (admin) Vue Router configuration
│   ├─ stores/      (admin) Global state management
│   ├─ styles/
│   └─ App.vue      Global header, footer, styles
│
├─ public/          External images etc
|   ├─ logos/
|   ├─ pdfs/
|   └─ thumbnails/
```

---

## 🛠 Coding Standards

### **1. Use Composition API (preferred)**

We follow Vue 3 best practices using script setup:

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
```

### **2. Use ESLint & Prettier**

The project uses linting to ensure code consistency.

Run linting:

```bash
npm run lint
```

Fix common formatting issues:

```bash
npm run lint:fix
```

### **3. Component Naming**

* PascalCase for component files: `MyComponent.vue`
* Use clear, descriptive names

### **4. Folder Organization**

Group files by feature when possible.

---

## 🔄 Git Workflow

### **1. Create a new branch**

```bash
git checkout -b feature/my-new-feature
```

### **2. Make your changes & commit**

```bash
git commit -m "Add new feature"
```

### **3. Push and open a pull request**

```bash
git push origin feature/my-new-feature
```

PRs are reviewed before merging.

---

## 📦 Updating the Website

The website will automatically update when changes are merged with the main branch in the repository.

---

## 📚 Adding Dependencies

Use npm:

```bash
npm install <package-name>
```

For dev-only deps:

```bash
npm install -D <package-name>
```

---

## 🧩 Vuetify Component Guidelines

* Use Vuetify grid system (`v-container`, `v-row`, `v-col`)
* Prefer Vuetify components where available
* Keep styling in `<style scoped>` when component-specific
* Use global styles sparingly

---

## ✔️ Final Notes for Contributors

* Keep PRs small and focused
* Write clear commit messages
* Follow the coding conventions
* Update documentation when adding features

---

Thanks for contributing! 🎉
