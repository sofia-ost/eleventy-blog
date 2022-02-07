module.exports = async function (data) {
  return /* html */ `
    <div class="container">
      <h1 class="title-1 posts-title">The Blog</h1>
      <div class="posts-list">
        ${(
          await Promise.all(
            data.map(async ({ title, image, date }) => {
              const postLink = title.replace(/ /g, "-");
              const newDate = new Date(date);
              const year = newDate.getFullYear();
              const month = newDate.toLocaleString("en-US", { month: "long" });
              const day = ("0" + newDate.getDate()).slice(-2);

              return /* html */ `
              <div class="blog/post-card">
                <a href="blog/${postLink}" class="post-image-wrapper">
                  ${await this.image(image, {
                    alt: "post preview image",
                    classes: "post-image",
                  })}
                </a>
                <span class="date">${month} ${day}, ${year}</span>
                <a href="blog/${postLink}" class="post-link">
                  ${title}
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
