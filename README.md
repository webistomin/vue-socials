<p align="center">
  <img width="124" height="124" src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/logo.svg" alt="Heart">
</p>

<h1 align="center">
  Vue Socials
</h1>

<p align="center">
  💬 Social media share buttons and counts for <a href="https://vuejs.org/">Vue.js</a>.
  <br>
  <a href="https://vue-socials.vercel.app/"><strong>Explore website »</strong></a>
</p>

<br>

<p align="center">
  <a href="https://npmjs.org/package/vue-socials">
    <img alt="NPM version" src="https://img.shields.io/npm/v/vue-socials.svg?color=%232D4CC8" />
</a>
  <a href="https://npmjs.org/package/vue-socials">
<img alt="NPM downloads" src="https://img.shields.io/npm/dm/vue-socials.svg?color=%232D4CC8">
</a>
 <a href="https://github.com/webistomin/vue-socials">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/webistomin/vue-socials?color=%232D4CC8">
</a>
 <a href="https://github.com/webistomin/vue-socials">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/webistomin/vue-socials?color=%232D4CC8">
</a>
 <a href="https://github.com/webistomin/vue-socials">
    <img alt="npm type definitions" src="https://img.shields.io/npm/types/vue-socials?color=%232D4CC8">
</a>
<a href="https://bundlephobia.com/result?p=vue-socials">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/vue-socials?color=%232D4CC8">
  </a>
</p>

<p align="center">
  <a href="#key-features-">Key Features</a> •
  <a href="#installation-">Installation</a> •
  <a href="#documentation-">Documentation</a> •
  <a href="#browsers-support-">Browsers support</a> •
  <a href="#license-">License</a>  •
  <a href="#support-the-project-">Support the project</a>  •
  <a href="#contributing-">Contributing</a>
</p>

## Key Features ✨

* **50+** reusable components
* **Small** [`~1.3KB` component average size](https://bundlephobia.com/package/vue-socials) (minified and gzipped)
* Fully **tree-shakeable**
* **No dependencies**
* **No SDK**
* **Don't track** the user
* **Completely** unstyled
* Built with **a11y** in mind
* **Support** Vue 2 & Vue 3
* **Support** SSR
* Each component exposing a **single slot** that gives you complete control over what should actually be rendered

## Installation  🚀

**npm**
```shell
# Vue 2
npm install vue-socials@1

# Vue 3
npm install vue-socials
```

**yarn**
```shell
# Vue 2
yarn add vue-socials@1

# Vue 3
yarn add vue-socials
```

**Import all components (not recommended)**

```js
/**
 * Vue 2
 */
import Vue from 'vue'
import VueSocials from 'vue-socials';

Vue.use(VueSocials)

/**
 * Vue 3
 */
import { createApp } from 'vue'
import VueSocials from 'vue-socials';
import App from './App.vue'

const app = createApp(App)
app.use(VueSocials)
```

**Import only specific component**
```js
/**
 * Vue 2
 */
import Vue from 'vue'
import { SGithub } from 'vue-socials';

Vue.component('SGithub', SGithub)

/**
 * Vue 3
 */
import { createApp } from 'vue'
import { SGithub } from 'vue-socials';
import App from './App.vue'

const app = createApp(App)
app.component('SGithub', SGithub)
```


## Documentation 🤗

Browse [online documentation here](https://vue-socials.vercel.app/)

### Socials

### B

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/blogger.svg" width="16" height="16"/> [Blogger](#sblogger)

### D

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/devto.svg" width="16" height="16"/> [DevTo](#sdevto)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/diaspora.svg" width="16" height="16"/> [Diaspora](#sdiaspora)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/douban.svg" width="16" height="16"/> [Douban](#sdouban)

### E

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/email.svg" width="16" height="16"/> [Email](#semail)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/evernote.svg" width="16" height="16"/> [Evernote](#severnote)

### F

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/facebook.svg" width="16" height="16"/> [Facebook](#sfacebook)
  
  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/facebook.svg" width="16" height="16"/> [Facebook counter](#sfacebookcount)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/facebook-messenger.svg" width="16" height="16"/> [Facebook Messenger](#sfacebookmessenger)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/facebook-workplace.svg" width="16" height="16"/> [Facebook Workplace](#sfacebookworkplace)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/flipboard.svg" width="16" height="16"/> [Flipboard](#sflipboard)

### G

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/github.svg" width="16" height="16"/> [Github](#sgithub)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/github.svg" width="16" height="16"/> [Github counter](#sgithubcount)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/github.svg" width="16" height="16"/> [Github gist](#sgithubgist)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/github.svg" width="16" height="16"/> [Github gist counter](#sgithubgistcount) 

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/github.svg" width="16" height="16"/> [Github repository](#sgithubrepo)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/github.svg" width="16" height="16"/> [Github repository counter](#sgithubrepocount)   

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/gmail.svg" width="16" height="16"/> [Gmail](#sgmail)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/google-bookmarks.svg" width="16" height="16"/> [Google Bookmarks](#sgooglebookmarks)

### H

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/hacker-news.svg" width="16" height="16"/> [Hacker News](#shackernews)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/hatena.svg" width="16" height="16"/> [Hatena](#shatena)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/hatena.svg" width="16" height="16"/> [Hatena counter](#shatenacount)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/houzz.svg" width="16" height="16"/> [Houzz](#shouzz)

### I

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/instapaper.svg" width="16" height="16"/> [Instapaper](#sinstapaper)

## K

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/kakao.svg" width="16" height="16"/> [Kakao Story](#skakaostory)

## L

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/line.svg" width="16" height="16"/> [Line](#sline)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/line.svg" width="16" height="16"/> [Line counter](#slinecount)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/linkedin.svg" width="16" height="16"/> [Linkedin](#slinkedin)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/livejournal.svg" width="16" height="16"/> [LiveJournal](#slivejournal)

## M

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/mailru.svg" width="16" height="16"/> [MailRu](#smailru)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/mastodon.svg" width="16" height="16"/> [Mastodon](#smastodon)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/microsoftteams.svg" width="16" height="16"/> [Microsoft Teams](#smicrosoftteams)

## O

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/odnoklassniki.svg" width="16" height="16"/> [Odnoklassniki](#sodnoklassniki)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/odnoklassniki.svg" width="16" height="16"/> [Odnoklassniki counter](#sodnoklassnikicount)

## P

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/pinterest.svg" width="16" height="16"/> [Pinterest](#spinterest)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/pinterest.svg" width="16" height="16"/> [Pinterest counter](#spinterestcount)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/pocket.svg" width="16" height="16"/> [Pocket](#spocket)

## Q

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/qzone.svg" width="16" height="16"/> [Qzone](#sqzone)

## R

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/reddit.svg" width="16" height="16"/> [Reddit](#sreddit)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/reddit.svg" width="16" height="16"/> [Reddit counter](#sredditcount)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/renren.svg" width="16" height="16"/> [Renren](#srenren)

## S

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/skype.svg" width="16" height="16"/> [Skype](#sskype)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/sms.svg" width="16" height="16"/> [Sms](#ssms)

## T

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/telegram.svg" width="16" height="16"/> [Telegram](#stelegram)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/threema.svg" width="16" height="16"/> [Threema](#sthreema)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/trello.svg" width="16" height="16"/> [Trello](#strello)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/tumblr.svg" width="16" height="16"/> [Tumblr](#stumblr)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/tumblr.svg" width="16" height="16"/> [Tumblr counter](#stumblrcount)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/twitter.svg" width="16" height="16"/> [Twitter](#stwitter)

## V

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/viber.svg" width="16" height="16"/> [Viber](#sviber)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/vkontakte.svg" width="16" height="16"/> [Vkontakte](#svkontakte)

  * <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/vkontakte.svg" width="16" height="16"/> [Vkontakte counter](#svkontaktecount)

## W

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/weibo.svg" width="16" height="16"/> [Weibo](#sweibo)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/whatsapp.svg" width="16" height="16"/> [Whatsapp](#swhatsapp)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/wordpress.svg" width="16" height="16"/> [Wordpress](#swordpress)

## X

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/xing.svg" width="16" height="16"/> [Xing](#sxing)

## Y

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/yahoo.svg" width="16" height="16"/> [Yahoo](#syahoo)

* <img src="https://raw.githubusercontent.com/webistomin/vue-socials/main/assets/icons/yammer.svg" width="16" height="16"/> [Yammer](#syammer)

---

### SBlogger

**Usage**

```vue
<template>
  <s-blogger
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-blogger>
</template>

<script>
  import { SBlogger } from 'vue-socials'

  export default {
    name: 'SBloggerSharing',
    
    components: { SBlogger },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: { 
          url: 'https://github.com/', 
          title: 'Title', 
          text: 'Text',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **title** – your blogpost title  <br /> **text** – your blogpost content <br /> <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SDevTo

**Usage**

```vue
<template>
  <s-dev-to
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-dev-to>
</template>

<script>
  import { SDevTo } from 'vue-socials'

  export default {
    name: 'SDevToSharing',
    
    components: { SDevTo },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          title: 'Title',
          isPublished: false,
          tags: ['tag', 'tag2'],
          content: 'Text 1\nText 2\n{% wikipedia https://en.wikipedia.org/wiki/Wikipedia %}',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **title** – your blogpost title <br /> **isPublished** – is your blogpost published <br /> **tags** – hashtags for blogpost <br /> **content** – your blogpost content <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SDiaspora

**Usage**

```vue
<template>
  <s-diaspora
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-diaspora>
</template>

<script>
  import { SDiaspora } from 'vue-socials'

  export default {
    name: 'SDiasporaSharing',
    
    components: { SDiaspora },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br />**title** – your blogpost title <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SDouban

**Usage**

```vue
<template>
  <s-douban
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-douban>
</template>

<script>
  import { SDouban } from 'vue-socials'

  export default {
    name: 'SDoubanSharing',
    
    components: { SDouban },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 1100, height: 450, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br />**title** – your blogpost title <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SEmail

**Usage**

```vue
<template>
  <s-email :share-options="shareOptions">
    <!-- your icon component -->
  </s-email>
</template>

<script>
  import { SEmail } from 'vue-socials'

  export default {
    name: 'SEmailSharing',
    
    components: { SEmail },
    
    data() {
      return {
        shareOptions: {
          mail: 'google@gmail.com',
          cc: ['google1@gmail.com', 'google3@gmail.com'],
          bcc: ['google2@gmail.com', 'google4@gmail.com'],
          subject: 'Subject',
          body: 'Hello\nWorld',
        },
      }
    },
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **mail** – e-mail recipient address <br /> **subject** – subject of e-mail <br /> **cc** – carbon copy e-mail address <br />  **bcc** – blind carbon copy e-mail address <br /> **body** – body of e-mail <br /> | `{}`

---

### SEvernote

**Usage**

```vue
<template>
  <s-evernote
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-evernote>
</template>

<script>
  import { SEvernote } from 'vue-socials'

  export default {
    name: 'SEvernoteSharing',
    
    components: { SEvernote },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 800, height: 560, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br />**title** – your blogpost title <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SFacebook

**Usage**

```vue
<template>
  <s-facebook
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-facebook>
</template>

<script>
  import { SFacebook } from 'vue-socials'

  export default {
    name: 'SFacebookSharing',
    
    components: { SFacebook },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          quote: 'Quote',
          hashtag: '#Github',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 685, height: 600, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **quote** – your blogpost quote <br /> **hashtag** – your blogpost hashtag <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SFacebookCount

**Usage**

```vue
<template>
  <s-facebook-count
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-facebook-count>
</template>

<script>
  import { SFacebookCount } from 'vue-socials'

  export default {
    name: 'SFacebookCountSharing',
    
    components: { SFacebookCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          id: 'https://github.com/',
          fields: ['id', 'og_object'],
          accessToken: '',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **id** – the URL you want to share <br /> **accessToken** – your facebook access token <br /> **fields** – a comma-separated list of fields you want to request. <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SFacebookMessenger

**Usage**

```vue
<template>
  <s-facebook-messenger
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-facebook-messenger>
</template>

<script>
  import { SFacebookMessenger } from 'vue-socials'

  export default {
    name: 'SFacebookMessengerSharing',
    
    components: { SFacebookMessenger },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          redirectUri: 'https://www.domain.com/',
          appId: 123456789,
          to: undefined,
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 685, height: 600, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **redirectUri** – The URL to redirect to after a person clicks a button on the dialog. <br /> **appId** – Your app's unique identifier. <br />  **to** – A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients. <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SFacebookWorkplace

**Usage**

```vue
<template>
  <s-facebook-workplace
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-facebook-workplace>
</template>

<script>
  import { SFacebookWorkplace } from 'vue-socials'

  export default {
    name: 'SFacebookWorkplaceSharing',
    
    components: { SFacebookWorkplace },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 685, height: 600, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SFlipBoard

**Usage**

```vue
<template>
  <s-flip-board
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-flip-board>
</template>

<script>
  import { SFlipBoard } from 'vue-socials'

  export default {
    name: 'SFlipBoardSharing',
    
    components: { SFlipBoard },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 834, height: 572, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br />**title** – your blogpost title <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SGithub

**Usage**

```vue
<template>
  <s-github
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-github>
</template>

<script>
  import { SGithub } from 'vue-socials'

  export default {
    name: 'SGithubSharing',
    
    components: { SGithub },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          username: 'webistomin',
          type: 'profile',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 834, height: 572, }`
`shareOptions` | `object` | Your share link parameters: <br /> **username** – your GitHub username <br /> **type** – share link type (sponsor, follow, profile) <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SGithubCount

**Usage**

```vue
<template>
  <s-github-count
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-github-count>
</template>

<script>
  import { SGithubCount } from 'vue-socials'

  export default {
    name: 'SGithubCountSharing',
    
    components: { SGithubCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          username: 'webistomin',
          type: 'follow',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **username** – your GitHub username <br /> **type** – share link type (follow) <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SGithubGist

**Usage**

```vue
<template>
  <s-github-gist
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-github-gist>
</template>

<script>
  import { SGithubGist } from 'vue-socials'

  export default {
    name: 'SGithubGistSharing',
    
    components: { SGithubGist },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          username: 'ai',
          gistId: 'e3683b03ba936ade91d33dbc721cd6d8',
          type: 'star',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 834, height: 572, }`
`shareOptions` | `object` | Your share link parameters: <br /> **username** – your gist username <br /> **gistId** – your gist id <br /> **type** – share link type (gist, star, fork, download) <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SGithubGistCount

**Usage**

```vue
<template>
  <s-github-gist-count
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-github-gist-count>
</template>

<script>
  import { SGithubGistCount } from 'vue-socials'

  export default {
    name: 'SGithubGistCountSharing',
    
    components: { SGithubGistCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          gistId: 'e3683b03ba936ade91d33dbc721cd6d8',
          type: 'fork',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **gistId** – your gist id <br /> **type** – share link type (fork) <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SGithubRepo

**Usage**

```vue
<template>
  <s-github-repo
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-github-repo>
</template>

<script>
  import { SGithubRepo } from 'vue-socials'

  export default {
    name: 'SGithubRepoSharing',
    
    components: { SGithubRepo },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          username: 'webistomin',
          repository: 'vue-socials',
          type: 'fork',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 834, height: 572, }`
`shareOptions` | `object` | Your share link parameters: <br /> **username** – your gist username <br /> **repository** – your repository name <br /> **type** – share link type (repo, watch, star, fork, download, issue, pr, template) <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SGithubRepoCount

**Usage**

```vue
<template>
  <s-github-repo-count
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-github-repo-count>
</template>

<script>
  import { SGithubRepoCount } from 'vue-socials'

  export default {
    name: 'SGithubRepoCountSharing',
    
    components: { SGithubRepoCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          username: 'webistomin',
          repository: 'nanogram.js',
          type: 'fork',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **username** – your github username <br /> **repository** – your github repository <br /> **type** – share link type (watch, type, fork, issues) <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SGmail

**Usage**

```vue
<template>
  <s-gmail
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-gmail>
</template>

<script>
  import { SGmail } from 'vue-socials'

  export default {
    name: 'SGmailSharing',
    
    components: { SGmail },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          to: 'google@gmail.com',
          su: 'Title',
          cc: 'google1@gmail.com',
          bcc: 'google2@gmail.com',
          body: 'Hello\nWorld',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **to** – e-mail recipient address <br /> **su** – subject of e-mail <br /> **cc** – carbon copy e-mail address <br />  **bcc** – blind carbon copy e-mail address <br />  **body** – body of e-mail <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SGoogleBookmarks

**Usage**

```vue
<template>
  <s-google-bookmarks
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-google-bookmarks>
</template>

<script>
  import { SGoogleBookmarks } from 'vue-socials'

  export default {
    name: 'SGoogleBookmarksSharing',
    
    components: { SGoogleBookmarks },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
          annotation: 'Annotation',
          tags: ['tag'],
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **title** – your bookmark title <br /> **url** – your url <br /> **annotation** – your text <br /> **tags** – your keywords or hashtags <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SHackerNews

**Usage**

```vue
<template>
  <s-hacker-news
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-hacker-news>
</template>

<script>
  import { SHackerNews } from 'vue-socials'

  export default {
    name: 'SHackerNewsSharing',
    
    components: { SHackerNews },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **title** – your bookmark title <br /> **url** – your url <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SHatena

**Usage**

```vue
<template>
  <s-hatena
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-hatena>
</template>

<script>
  import { SHatena } from 'vue-socials'

  export default {
    name: 'SHatenaSharing',
    
    components: { SHatena },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **title** – your bookmark title <br /> **url** – your url <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SHatenaCount

**Usage**

```vue
<template>
  <s-hatena-count
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-hatena-count>
</template>

<script>
  import { SHatenaCount } from 'vue-socials'

  export default {
    name: 'SHatenaCountSharing',
    
    components: { SHatenaCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          url: 'https://github.com/',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SHouzz

**Usage**

```vue
<template>
  <s-houzz
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-houzz>
</template>

<script>
  import { SHouzz } from 'vue-socials'

  export default {
    name: 'SHouzzSharing',
    
    components: { SHouzz },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          id: '123',
          image: 'url',
          title: 'Title',
          category: ['category'],
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 1100, height: 700, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – Canonical URL of your product. If you already have products listed in Houzz, make sure the URLs match exactly to prevent duplicate listings and maintain accuracy of the Ideabook count. <br /> **id** – A unique identifier that verifies you own this web page. <br /> **image** – URL of hi-res product image. <br /> **title** – Title of the product. <br /> **category** –  Keywords to help categorize the product. (ie. 'Wall Sconces') <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SInstaPaper

**Usage**

```vue
<template>
  <s-insta-paper
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-insta-paper>
</template>

<script>
  import { SInstaPaper } from 'vue-socials'

  export default {
    name: 'SInstaPaperSharing',
    
    components: { SInstaPaper },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 600, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SKakaoStory

**Usage**

```vue
<template>
  <s-kakao-story
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-kakao-story>
</template>

<script>
  import { SKakaoStory } from 'vue-socials'

  export default {
    name: 'SKakaoStorySharing',
    
    components: { SKakaoStory },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          text: 'Text',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **text** – your blogpost text <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SLine

**Usage**

```vue
<template>
  <s-line
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-line>
</template>

<script>
  import { SLine } from 'vue-socials'

  export default {
    name: 'SLineSharing',
    
    components: { SLine },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          text: 'Text',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **text** – your blogpost text <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SLineCount

**Usage**

```vue
<template>
  <s-line-count
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-line-count>
</template>

<script>
  import { SLineCount } from 'vue-socials'

  export default {
    name: 'SLineCountSharing',
    
    components: { SLineCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          url: 'https://github.com/',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

---

### SLinkedIn

**Usage**

```vue
<template>
  <s-linked-in
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-linked-in>
</template>

<script>
  import { SLinkedIn } from 'vue-socials'

  export default {
    name: 'SLinkedInSharing',
    
    components: { SLinkedIn },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SLiveJournal

**Usage**

```vue
<template>
  <s-live-journal
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-live-journal>
</template>

<script>
  import { SLiveJournal } from 'vue-socials'

  export default {
    name: 'SLiveJournalSharing',
    
    components: { SLiveJournal },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          subject: 'Title',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **subject** – your title <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SMailRu

**Usage**

```vue
<template>
  <s-mail-ru
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-mail-ru>
</template>

<script>
  import { SMailRu } from 'vue-socials'

  export default {
    name: 'SMailRuSharing',
    
    components: { SMailRu },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
          description: 'Description',
          image: '',
          swfUrl: '',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **title** – your title <br /> **description** – your description <br /> **image** – your image <br /> **swfUrl** – your flash-player with video <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SMastodon

**Usage**

```vue
<template>
  <s-mastodon
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-mastodon>
</template>

<script>
  import { SMastodon } from 'vue-socials'

  export default {
    name: 'SSMastodonSharing',
    
    components: { SMastodon },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          domain: 'https://mas.to',
          url: 'https://github.com',
          text: 'Hello, world!',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description                                                                                                                                            | Default value |
| ------ | ------ |--------------------------------------------------------------------------------------------------------------------------------------------------------| ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 700, }`
`shareOptions` | `object` | Your share link parameters:  <br />   **domain** – the mastodon domain <br /> **url** – the URL you want to share <br /> **text** – your text <br />            | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not                                                                                             | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SMicrosoftTeams

**Usage**

```vue
<template>
  <s-microsoft-teams
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-microsoft-teams>
</template>

<script>
  import { SMicrosoftTeams } from 'vue-socials'

  export default {
    name: 'SMicrosoftTeamsSharing',
    
    components: { SMicrosoftTeams },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          preview: true,
          text: 'Text',
          title: 'Title',
          instruction: 'Instruction',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **title** – Default Text to be inserted in the assignments "Title" field (50 character limit) <br /> **text** – Default Text to be inserted before the link in the message compose box (200 character limit) <br /> **preview** – Whether or not to show a preview of the content to share.<br /> **instruction** – Default Text to be inserted in the assignments "Instructions" field (200 character limit) <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SOdnoklassniki

**Usage**

```vue
<template>
  <s-odnoklassniki
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-odnoklassniki>
</template>

<script>
  import { SOdnoklassniki } from 'vue-socials'

  export default {
    name: 'SOdnoklassnikiSharing',
    
    components: { SOdnoklassniki },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SOdnoklassnikiCount

**Usage**

```vue
<template>
  <s-odnoklassniki-count
    :tag="tag"
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-odnoklassniki-count>
</template>

<script>
  import { SOdnoklassnikiCount } from 'vue-socials'

  export default {
    name: 'SOdnoklassnikiCountSharing',
    
    components: { SOdnoklassnikiCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          ref: 'https://github.com/',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **ref** – the URL you want to share <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SPinterest

**Usage**

```vue
<template>
  <s-pinterest
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-pinterest>
</template>

<script>
  import { SPinterest } from 'vue-socials'

  export default {
    name: 'SPinterestSharing',
    
    components: { SPinterest },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          media: '',
          description: 'Description',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **media** – Overrides the image and substitutes a different image in the Pin Create form. <br /> **description** – Overrides the default image description and substitutes an image description you provide. <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SPinterestCount

**Usage**

```vue
<template>
  <s-pinterest-count
    :tag="tag"
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-pinterest-count>
</template>

<script>
  import { SPinterestCount } from 'vue-socials'

  export default {
    name: 'SPinterestCountSharing',
    
    components: { SPinterestCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          url: 'https://github.com/',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SPocket

**Usage**

```vue
<template>
  <s-pocket
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-pocket>
</template>

<script>
  import { SPocket } from 'vue-socials'

  export default {
    name: 'SPocketSharing',
    
    components: { SPocket },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SQZone

**Usage**

```vue
<template>
  <s-q-zone
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-q-zone>
</template>

<script>
  import { SQZone } from 'vue-socials'

  export default {
    name: 'SQZoneSharing',
    
    components: { SQZone },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
          summary: 'Summary',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **title** – your title <br /> **summary** – your text <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SReddit

**Usage**

```vue
<template>
  <s-reddit
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-reddit>
</template>

<script>
  import { SReddit } from 'vue-socials'

  export default {
    name: 'SRedditSharing',
    
    components: { SReddit },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
          text: 'Hello World!',
          selftext: true,
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **title** – your title <br /> **text** – your text <br /> **selftext** – sets the displayed tab to the self post tab <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SRedditCount

**Usage**

```vue
<template>
  <s-reddit-count
    :tag="tag"
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-reddit-count>
</template>

<script>
  import { SRedditCount } from 'vue-socials'

  export default {
    name: 'SRedditCountSharing',
    
    components: { SRedditCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          url: 'https://github.com/',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SRenRen

**Usage**

```vue
<template>
  <s-ren-ren
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-ren-ren>
</template>

<script>
  import { SRenRen } from 'vue-socials'

  export default {
    name: 'SRenRenSharing',
    
    components: { SRenRen },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          srcUrl: 'https://github.com/',
          resourceUrl: 'https://github.com/',
          title: 'Title',
          description: 'Description',
          pic: '',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **srcUrl** – the URL you want to share <br /> **resourceUrl** – the source Url of the shared resource, the default is the Referer in the header <br /> **title** – your title <br /> **description** – your text <br /> **pic** – your image <br /> | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SSkype

**Usage**

```vue
<template>
  <s-skype
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-skype>
</template>

<script>
  import { SSkype } from 'vue-socials'

  export default {
    name: 'SSkypeSharing',
    
    components: { SSkype },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          text: 'Text',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **text** – your text <br />  | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SSms

**Usage**

```vue
<template>
  <s-sms
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-sms>
</template>

<script>
  import { SSms } from 'vue-socials'

  export default {
    name: 'SSmsSharing',
    
    components: { SSms },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          number: '+1(999)999-99-99',
          body: 'Hello world!',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **number** – your number <br /> **body** – your text <br />  | `{}`

---

### STelegram

**Usage**

```vue
<template>
  <s-telegram
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-telegram>
</template>

<script>
  import { STelegram } from 'vue-socials'

  export default {
    name: 'STelegramSharing',
    
    components: { STelegram },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          text: 'Text',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **text** – your text <br />  | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SThreema

**Usage**

```vue
<template>
  <s-threema
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-threema>
</template>

<script>
  import { SThreema } from 'vue-socials'

  export default {
    name: 'SThreemaSharing',
    
    components: { SThreema },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          id: '',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **id** – your id <br />  | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### STrello

**Usage**

```vue
<template>
  <s-trello
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-trello>
</template>

<script>
  import { STrello } from 'vue-socials'

  export default {
    name: 'STrelloSharing',
    
    components: { STrello },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          name: 'Name',
          description: 'Description',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **name** – your card name <br /> **description** – your card description <br />  | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### STumblr

**Usage**

```vue
<template>
  <s-tumblr
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-tumblr>
</template>

<script>
  import { STumblr } from 'vue-socials'

  export default {
    name: 'STumblrSharing',
    
    components: { STumblr },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          canonicalUrl: 'https://github.com/',
          title: 'Title',
          caption: 'Caption',
          tags: ['hash', 'tag'],
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **canonicalUrl** – the URL you want to share <br /> **title** – title of the Text post <br /> **caption** – post caption <br /> **tags** – list of tags <br />  | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### STumblrCount

**Usage**

```vue
<template>
  <s-tumblr-count
    :tag="tag"
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-tumblr-count>
</template>

<script>
  import { STumblrCount } from 'vue-socials'

  export default {
    name: 'STumblrCountSharing',
    
    components: { STumblrCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          url: 'https://github.com/',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### STwitter

**Usage**

```vue
<template>
  <s-twitter
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-twitter>
</template>

<script>
  import { STwitter } from 'vue-socials'

  export default {
    name: 'STwitterSharing',
    
    components: { STwitter },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          text: 'Hello world',
          hashtags: ['hash', 'tag'],
          via: 'twitterdev',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **text** – post text <br /> **via** – username  <br /> **hashtags** – list of tags <br />  | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SViber

**Usage**

```vue
<template>
  <s-viber
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-viber>
</template>

<script>
  import { SViber } from 'vue-socials'

  export default {
    name: 'SViberSharing',
    
    components: { SViber },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          text: 'Text',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **text** – post text  | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SVkontakte

**Usage**

```vue
<template>
  <s-vkontakte
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-vkontakte>
</template>

<script>
  import { SVkontakte } from 'vue-socials'

  export default {
    name: 'SVkontakteSharing',
    
    components: { SVkontakte },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
          image: '',
          noParse: false,
          noVkLinks: false,
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **title** – post title  <br /> **image** – image URL <br /> **noParse** – don't do additional request for missing information <br /> **noVkLinks** – don't add active profile links  | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SVkontakteCount

**Usage**

```vue
<template>
  <s-vkontakte-count
    :tag="tag"
    :share-options="shareOptions"
    @load="onLoad"
    @error="onError"
    @loading="onLoading"
  ></s-vkontakte-count>
</template>

<script>
  import { SVkontakteCount } from 'vue-socials'

  export default {
    name: 'SVkontakteCountSharing',
    
    components: { SVkontakteCount },
    
    data() {
      return {
        tag: 'span',
        shareOptions: {
          url: 'https://github.com/',
        },
      }
    },
    
    methods: {
      onLoad() {},
      onError() {},
      onLoading() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> | `{}`
`tag` | `string` | Dynamic HTML tag or component  | `span`

**Events**

| Event name | Usage |
| ------ | ------ |
`load` |  the request has finished successfully | 
`error` | the request has finished with error |
`loading` | the request has started |

**⚠️ Warning**

This component uses `JSONP` so the content won't be available during `SSR`.

---

### SWeibo

**Usage**

```vue
<template>
  <s-weibo
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-weibo>
</template>

<script>
  import { SWeibo } from 'vue-socials'

  export default {
    name: 'SWeiboSharing',
    
    components: { SWeibo },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          title: 'Title',
          appkey: '',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – the URL you want to share <br /> **title** – post title  <br /> **appkey** – your app key | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SWhatsApp

**Usage**

```vue
<template>
  <s-whats-app
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-whats-app>
</template>

<script>
  import { SWhatsApp } from 'vue-socials'

  export default {
    name: 'SWhatsAppSharing',
    
    components: { SWhatsApp },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          number: '1(999)999-99-99',
          text: 'Hello world!',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **number** – your number <br /> **text** – post text | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SWordPress

**Usage**

```vue
<template>
  <s-word-press
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-word-press>
</template>

<script>
  import { SWordPress } from 'vue-socials'

  export default {
    name: 'SWordPressSharing',
    
    components: { SWordPress },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          domain: 'https://wordpress.org',
          url: 'https://github.com',
          title: 'Title',
          text: 'Text',
          image: '',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **title** – post title <br /> **text** – post text <br /> **domain** – your domain <br /> **url** – the url of the current page  <br /> **image** – url of an image file | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SXing

**Usage**

```vue
<template>
  <s-xing
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-xing>
</template>

<script>
  import { SXing } from 'vue-socials'

  export default {
    name: 'SXingSharing',
    
    components: { SXing },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          followUrl: '',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – A fixed URL to be shared  <br /> **followUrl** – The URL of a XING news page for the Follow button shown on the success page. | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SYahoo

**Usage**

```vue
<template>
  <s-yahoo
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-yahoo>
</template>

<script>
  import { SYahoo } from 'vue-socials'

  export default {
    name: 'SYahooSharing',
    
    components: { SYahoo },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          email: 'mail@gmail.com',
          subject: 'Subject',
          body: 'Hello\nWorld!',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **email** – e-mail recipient address <br /> **subject** – subject of e-mail  <br /> **body** – body of e-mail | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

### SYammer

**Usage**

```vue
<template>
  <s-yammer
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
    <!-- your icon component -->
  </s-yammer>
</template>

<script>
  import { SYammer } from 'vue-socials'

  export default {
    name: 'SYammerSharing',
    
    components: { SYammer },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
          text: 'Text',
          groupId: '',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>
```

**Props**

| Prop | Type | Description | Default value |
| ------ | ------ | ------ | ------ |
`windowFeatures` | `object` | Pass options to `window.open()`. [Requested features of the new window.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features) | `{ width: 600, height: 540, }`
`shareOptions` | `object` | Your share link parameters: <br /> **url** – A fixed URL to be shared <br /> **text** – post text  <br /> **groupId** – your group id | `{}`
`useNativeBehavior` | `boolean` | Use native link behavior instead of `window.open()` or not | `false`

**Events**

| Event name | Usage |
| ------ | ------ |
`popup-open` | `window.open()` has been opened |
`popup-close` | `window.open()` has been closed |
`popup-block` | `window.open()` has been blocked |
`popup-focus` | `window.open()` has been focused |

---

## Browsers support 🌎

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Yandex |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge 80 | 60+ | 60+ | 10+ | 10+ | 12+ | 50+ | 14.4+

## License 📄

### [MIT](https://github.com/webistomin/vue-socials/blob/master/LICENSE)

## Support the project ⭐

If you feel awesome and want to support me in a small way, please consider starring and sharing the repo!

## Contributing 🎉

Found a bug? Missing a specific feature?
Your contributions are always welcome! Please have a look at the [contribution guidelines](https://github.com/webistomin/vue-socials/blob/master/CONTRIBUTING.md) first.

## Contributors ❤️

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://webistom.in/en"><img src="https://avatars.githubusercontent.com/u/30475699?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alexey Istomin</b></sub></a><br /><a href="#a11y-webistomin" title="Accessibility">️️️️♿️</a> <a href="https://github.com/webistomin/vue-socials/commits?author=webistomin" title="Tests">⚠️</a> <a href="https://github.com/webistomin/vue-socials/commits?author=webistomin" title="Code">💻</a> <a href="#ideas-webistomin" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/BodrovIgor"><img src="https://avatars.githubusercontent.com/u/79087208?v=4?s=100" width="100px;" alt=""/><br /><sub><b>BodrovIgor</b></sub></a><br /><a href="#content-BodrovIgor" title="Content">🖋</a> <a href="#design-BodrovIgor" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
