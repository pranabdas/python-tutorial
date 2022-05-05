<h1 align="center">Python tutorial</h1>

<p align="center">
  <a href="https://github.com/pranabdas/python-tutorial/actions/workflows/deploy-gh-pages.yml"><img src="https://github.com/pranabdas/python-tutorial/actions/workflows/deploy-gh-pages.yml/badge.svg" alt="Deploy gh-pages status"></a>
</p>

Read the documentation at <https://pranabdas.github.io/python-tutorial/>

### Development of documentation
```console
git clone --depth 1 https://github.com/pranabdas/python-tutorial
npm install
```

Serve locally:
```console
npm start
```

Build:
```console
npm run build
```

Deploy to GitHub pages:
```console
npm run gh-deploy
```

Swizzle NotFoud:
```console
npm run swizzle @docusaurus/theme-classic NotFound
```

Customize `src/theme/NotFound.js`
