# Swedish Translations for react-admin

Swedish translations for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services. Built upon [Stefan Wallin's](https://github.com/StefanWallin) translations for admin-on-react, [aor-language-swedish](https://github.com/StefanWallin/aor-language-swedish).

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

```sh
npm install --save @kolben/ra-language-swedish
```

or

```sh
yarn add @kolben/ra-language-swedish
```

## Usage

```js
import swedishMessages from 'ra-language-swedish';

const messages = {
    'sv': swedishMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="sv" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).
