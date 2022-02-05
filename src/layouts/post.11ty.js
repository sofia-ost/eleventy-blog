module.exports.render = async function (data) {
  return /* html */ `
        <section class="article">
            ${data.content}
        </section>
    `;
};
