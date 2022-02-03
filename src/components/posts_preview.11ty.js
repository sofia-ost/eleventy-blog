module.exports = async function (data) {
  return (
    await Promise.all(
      data.map(async (item) => {
        return /* html */ `
        <div class="post-card">
            ${await this.image(item.image, {
              alt: "post preview image",
            })}
            <h2 class="title-2 post-card-title"></h2>
        </div>
    `;
      })
    )
  ).join(" ");
};
