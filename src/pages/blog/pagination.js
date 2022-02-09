module.exports = function (data) {
  console.log(data.pageNumber);
  return /* html */ `
        <ul class="pagination">
            ${data.hrefs
              .map((item) => {
                const pageNumber = item.replace(/\//g, "");
                return `
                    <li class="pagination-item">
                        <a href="/${pageNumber}" class="pagination-link">${
                  pageNumber === "" ? pageNumber + 1 : pageNumber
                }</a>
                    </li>
                `;
              })
              .join(" ")}
        </ul>
    `;
};
