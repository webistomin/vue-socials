<p align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
  <img width="124" height="124" src="./assets/logo.svg" alt="Heart">
</p>

<h1 align="center">
  Vue Socials
</h1>

<p align="center">
  Social media share buttons and counts for <a href="https://vuejs.org/">Vue.js</a>.
  <br>
  <a href=""><strong>Explore website »</strong></a>
</p>

<br>

<p align="center">
  <a href="https://npmjs.org/package/vue-socials">
    <img alt="NPM version" src="https://img.shields.io/npm/v/vue-socials.svg" />
</a>
  <a href="https://npmjs.org/package/reakit">
<img alt="NPM downloads" src="https://img.shields.io/npm/dm/vue-socials.svg">
</a>
 <a href="https://github.com/webistomin/vue-socials">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/webistomin/vue-socials.js">
</a>
 <a href="https://github.com/webistomin/vue-socials">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/webistomin/vue-socials.js">
</a>
 <a href="https://github.com/webistomin/vue-socials">
    <img alt="npm type definitions" src="https://img.shields.io/npm/types/vue-socials.js">
</a>
<a href="https://bundlephobia.com/result?p=vue-socials">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/vue-socials.js">
  </a>
</p>

<p align="center">
  <a href="#key-features-">Key Features</a> •
  <a href="#documentation-">Documentation</a> •
  <a href="#browsers-support-">Browsers support</a> •
  <a href="#license-">License</a>  •
  <a href="#support-the-project-">Support the project</a>  •
  <a href="#contributing-">Contributing</a>
</p>

## Key Features ✨

* **50+** reusable components
* **Small** `~7KB` (minified and gzipped)
* Fully **tree-shakeable**
* **No dependencies**
* **No SDK**
* **Don't track** the user
* Built with **a11y** in mind
* **One API** to rule them all
* **TypeScript** support

## Documentation 🤗

Browse [online documentation here](https://github.com/webistomin/vue-socials.js/blob/master/LICENSE)

### Socials

### B

* <img src="./assets/icons/blogger.svg" width="16" height="16"/> [Blogger](#sblogger)

### D

* <img src="./assets/icons/devto.svg" width="16" height="16"/> [DevTo](#sdevto)
---
<br>

### SBlogger

**Website**

[https://www.blogger.com/](https://www.blogger.com/)

**Share link documentation**

[https://stackoverflow.com/questions/22573164/blog-share-on-blogger-link/22583473#22583473](https://stackoverflow.com/questions/22573164/blog-share-on-blogger-link/22583473#22583473)

**Example**

[https://www.blogger.com/blog-this.g?u=https%3A%2F%2Fgithub.com%2F&t=Text&n=Title/](https://www.blogger.com/blog-this.g?u=https%3A%2F%2Fgithub.com%2F&t=Text&n=Title/)

**Usage**

```js
import Vue from 'vue'
import { SBlogger } from 'vue-socials'

Vue.component('SBlogger', SBlogger)
```

**Props**

<table>
  <thead>
    <tr>
      <td><b>Prop</b></td>
      <td><b>Type</b></td>
      <td><b>Description</b></td>
      <td><b>Default value</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          windowFeatures
        </code>
      </td>
      <td>
        <code>
          object
        </code>
      </td>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features">Requested features of the new window.</a>
      </td>
      <td>
        <code>{ width: 600, height: 540, }</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          shareOptions
        </code>
      </td>
      <td>
        <pre>{
  url: string;
  title: string;
  text: string;
}</pre>
      </td>
      <td>
        Your share link parameters.
        <pre>{ 
  url: 'https://github.com/',
  title: 'Title',
  text: 'Text',
}</pre>
      </td>
      <td>
        <code>{}</code>
      </td>
    </tr>
  </tbody>
</table>

---
<br>

## Browsers support 🌎

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Yandex |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions
<br>

## License 📄

### [MIT](https://github.com/webistomin/vue-socials.js/blob/master/LICENSE)
<br>

## Support the project ⭐

If you feel awesome and want to support us in a small way, please consider starring and sharing the repo!
<br>

## Contributing 🎉

Found a bug? Missing a specific feature?
Your contributions are always welcome! Please have a look at the [contribution guidelines](https://github.com/webistomin/nanogram.js/blob/master/CONTRIBUTING.md) first.
<br>

## Contributors ❤️

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/BodrovIgor"><img src="https://avatars.githubusercontent.com/u/79087208?v=4?s=100" width="100px;" alt=""/><br /><sub><b>BodrovIgor</b></sub></a><br /><a href="#content-BodrovIgor" title="Content">🖋</a> <a href="#design-BodrovIgor" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<br>

