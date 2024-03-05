# Hephaestus

Modern and minimalistic blog theme powered by [Zola](https://getzola.org). See a live preview [here](https://vhdirk.github.io/hephaestus).

This is a fork of <https://github.com/not-matthias/apollo>, which is named after the greek god of knowledge, wisdom and intellect.
Hephaestus is the lame and ugly son of Apollo, which is apt since I am by no means a designer ¯\_(ツ)_/¯.

<details open>
  <summary>Light theme</summary>

![blog-light](./screenshot.png)
</details>

<details>
  <summary>Dark theme</summary>

  ![blog-dark](./screenshot-dark.png)
</details>

## Features

- [X] Pagination
- [X] Themes (light, dark, auto)
- [X] Projects page
- [X] Analytics using [GoatCounter](https://www.goatcounter.com/) / [Umami](https://umami.is/)
- [x] Social Links
- [x] MathJax Rendering
- [x] Taxonomies
- [x] Meta Tags For Individual Pages
- [x] Callouts
- [x] Outdated Post Warning
- [ ] Search
- [ ] Categories

## Installation

1. Download the theme

```sh
git submodule add https://github.com/vhdirk/hephaestus themes/hephaestus
```

2. Add `theme = "hephaestus"` to your `config.toml`
3. Copy the icons to your static folder

```sh
cp -r themes/hephaestus/static/icon static/icon
```

4. Copy the example content

```sh
cp -r themes/hephaestus/content content
```

## Options

### Comment

You can enable comment (Giscus) for each page:

```toml
[extra]
comment = true
```

And then save your script from [Giscus](https://giscus.app) to `templates/_giscus_script.html`.

### Additional stylesheets

You can add stylesheets to override the theme:

```toml
[extra]
stylesheets = [
    "override.css",
    "something_else.css"
]
```

These filenames are relative to the root of the site. In this example, the two CSS files would be in the `static` folder.

### MathJax

To enable MathJax equation rendering, set the variable `mathjax` to `true` in
the `extra` section of your config.toml. Set `mathjax_dollar_inline_enable` to
`true` to render inline math by surrounding them inside $..$.

```toml
[extra]
mathjax = true
mathjax_dollar_inline_enable = true
```

## Config

### Customize `<meta/>` tags

 The following TOML and YAML code will yiled two `<meta/>` tags, `<meta property="og:title" content="the og title"/>`, `<meta property="og:description" content="the og description"/>`.

 TOML:

 ```toml
 title = "post title"
 description = "post desc"
 date = "2023-01-01"

 [extra]
 meta = [
     {property = "og:title", content = "the og title"},
     {property = "og:description", content = "the og description"},
 ]
 ```

 YAML:

 ```yaml
 title: "post title"
 description: "post desc"
 date: "2023-01-01"
 extra:
     meta:
         - property: "og:title"
           content: "the og title"
         - property: "og:description"
           content: "the og description"
 ```

 If the `og:title`, the `og:description`, or the "description" are not set, the page's title and description will be used. That is, the following TOML code generates `<meta property="og:title" content="post title"/>`, `<meta property="og:description" content="post desc"/>`, and `<meta property="og:description" content="post desc"/>` as default values.

 ```toml
 title = "post title"
 description = "post desc"
 date = "2023-01-01"
 ```

## References

This theme is based on [archie-zola](https://github.com/XXXMrG/archie-zola/).
