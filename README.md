# NativeScript-Platform-CSS

A NativeScript plugin to deal with Declarative UI and Platform specific CSS

### What is it?

This plugin automatically add some platform related css variable to the current **Page**.

It allows you to customize your UI for android or ios only:

```
.ios .example {
  color: blue;
}

.android .example {
  color: red;
}
```

This also adds classes related to the DPI of the screen.
We have this range of DPI `1280, 1024, 800, 600, 540, 480, 400, 360, 320`

You will be able to select that like that:

```
.ios800 .example {
  font-size: 25;
}

.ios480 .example {
  font-size: 18;
}

.android800 .example {
  font-size: 25;
}

.android480 .example {
  font-size: 18;
}
```

or also like that:

```
.screen800 .example {
  font-size: 25;
}

.screen480 .example {
  font-size: 18;
}
```

You have also access to class with the device name:

```
.samsunggalaxys6 .example {
  color: red;
}

.iphone6s .example {
  color: blue;
}
```

### Installation

This plugin runs only on Nativescript 7.0 and later.

```
ns plugin add @vulksoft/nativescript-platform-css@latest
```

### Usage

You only need to `require()` the plugin in your `app.js` or `main.ts` (if angular or vue).
This will automatically add the css classes on the current loaded page.

### Demo

You can try the demo app that will show you the css classes that are added on the page.

### Contributors

- Nathanael Anderson
- Steve McNiven-Scott
- Dave Coffin
- Jonathan Salomon
