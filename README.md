# How to use this style for your own pages

For this I rely on mkdocs static site generator. You can install it using: 
```bash
pip install mkdocs
```

You can initialize the mkdocs for a folder as follows:
```bash
mkdocs new <folder>
```

This will create the following file structure:
```bash
project
  - docs
    - mkdocs.yaml 
    - index.md
```

This is a customizable framework that can my modified using [styling](https://mkdocs.readthedocs.io/en/0.13.3/user-guide/styling-your-docs/) or using third party [community themes](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes).
For this project, I am considering using [mkdocs material](https://squidfunk.github.io/mkdocs-material/) or [gitbook](https://pypi.org/project/mkdocs-gitbook/) themes. 

Let's begin with material
```bash
pip install mkdocs-material
pip install mkdocs-gitbook # gitbook
```

You can override the main page with this info
```html
---
hide:
  - navigation
  - title
  - toc
  - footer
  - tags
  - feedback
---

<p align="center">
  <a href="https://squidfunk.github.io/mkdocs-material/">
    <img src="http://www.clipartbest.com/cliparts/nTX/e8x/nTXe8xaTB.jpeg" width="320" alt="Material for MkDocs">
  </a>
</p>
<br/><br/>
<p align="center" style="line-height:2" >
  <strong>
    A 
    <a href="https://material.io/">Material Design</a> 
    theme for 
    <a href="https://www.mkdocs.org/">MkDocs</a>
  </strong>
</p>
```

The theme palette can be altered as follows:
```yaml
theme:
  name: material
  features:
    - navigation.top
  palette: 
    - scheme: default
      primary: black
      accent: deep purple
      toggle:
        icon: material/toggle-switch
        name: dark mode
    - scheme: slate
      primary: white
      accent: deep purple
      toggle:
        icon: material/toggle-switch-off-outline 
        name: light mode
```
Remove the top search bar using ```plugins: []```

And add some extensions to the project as follows:
```yaml
markdown_extensions:
  - attr_list
  - def_list
  - pymdownx.emoji:
      emoji_generator: !!python/name:materialx.emoji.to_svg
      emoji_index: !!python/name:materialx.emoji.twemoji
  - pymdownx.highlight:
      anchor_linenums: false
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.arithmatex:
      generic: true
  
  extra:
  generator: false # To remove the made with Material for MkDocs line from footer.
  social:
    - icon: fontawesome/brands/twitter 
      link: https://twitter.com/<username>
    - icon: fontawesome/brands/kaggle
      link: https://kaggle.com/<username>
    - icon: fontawesome/brands/instagram 
      link: https://instagram.com/<username>
```

Some extra dependencies could also be injected as follows:
```yaml
extra_css:
  - stylesheets/extra.css
extra_javascript:
  - javascripts/mathjax.js
  - https://polyfill.io/v3/polyfill.min.js?features=es6
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
```

### Debugging and running website
```bash
mkdocs serve -a 0.0.0.0:1234
```
