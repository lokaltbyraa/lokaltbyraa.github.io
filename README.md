# Hello!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Markdown cheat sheet

<details>
  <summary>View</summary>

  ```

  ### Heading
  # Dette er en titteloverskift (H1)

Dette er er vanlig avsnitt

## Dette er en underoverskrift (H2)

### Dette er enda en underoverskrift (H3) og så videre

Slik lager du en [link](https://duckduckgo.com)

Slik lager du raske linker til nettsider eller epostadresser: <https://www.markdownguide.org> og <fake@example.com> 

Det er også mulig å flytte linkadresser utenfor teksten ved bruk av  [hakeparentes][1]. Dette kan gjøre teksten enklere å lese mens man jobber med den

[1]: <https://snl.no/klamme>

Bilder legger du inn slik:

![Her skriver du inn bildeteksten til skjermleseren.](../../images/projects/nettside.jpg)

For å optimalisere bildestørrelsen må du linke til bilder som ligger i /src/images og **ikke** i public-mappa.

Slik gjør du tekst **bold.**

Slik gjør du tekst *kursiv.*

Slik gjør du tekst ***bold og kursiv.***

For å vise et symbol som vanligvis brukes til formatering bruker du omvendt skråstrek:

\#twitter

Du markerer linjeskift  
med to mellomrom ved skiftet.

Slik laget du en skillelinje:
***

Slik lager du en nummerert liste:
1. Første punkt
2. Andre punkt
    1. Første underpunkt
    2. Andre underpunkt
3. Tredje punkt

Slik lager du en unummerert liste:
- Første punkt
- Andre punkt
    - Første underpunkt
    - Andre underpunkt
- Tredje punkt

```

</details>