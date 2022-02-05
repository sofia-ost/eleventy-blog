module.exports = async function (data) {
  return /* html */ `
    <div class="container">
      <div class="posts-list">
        ${(
          await Promise.all(
            data.map(async ({ title, image }) => {
              const postLink = title.replace(/ /g, "-");

              return /* html */ `
              <div class="blog/post-card">
                <a href="${postLink}">
                  ${await this.image(image, {
                    alt: "post preview image",
                    classes: "post-image",
                  })}
                </a>
                <a href="blog/${postLink}" class="post-link">
                  <h2 class="title-2 post-card-title">${title}</h2>
                </a>
              </div>
          `;
            })
          )
        ).join(" ")}
      </div>
    </div>
  `;
};
