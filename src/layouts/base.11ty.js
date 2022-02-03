module.exports.render = async function pwa({
  lang = "en",
  styles,
  content,
  scripts,
}) {
  return /* html */ `
        <!doctype html>
        <html lang="${lang}">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>

            <link rel="stylesheet" href="${styles}">
        </head>
        <body>
            ${content}

            <script type="module" src="${scripts}"></script>
        </body>
        </html>
    `;
};
