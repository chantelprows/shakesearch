const Controller = {
  search: (ev, page) => {
    ev.preventDefault();
    const form = document.getElementById("form");
    const data = Object.fromEntries(new FormData(form));
    const response = fetch(`/search?q=${data.query}&p=${page}`).then((response) => {
      response.json().then((results) => {
        Controller.updateTable(results);
      });
    });
  },

  updateTable: (results) => {
    const table = document.getElementById("table-body");
    const rows = [];
    for (let result of results) {
      rows.push(`<tr><td>${result}</td></tr>`);
    }
    table.innerHTML = rows;
  },
};

let page = 1;

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  page = 1;
  Controller.search(e, page);
});

const loadMore = document.getElementById("load-more");
loadMore.addEventListener("click", (e) => {
  page++;
  Controller.search(e, page);
});