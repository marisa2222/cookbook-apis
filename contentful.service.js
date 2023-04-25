const contentful = require("contentful");

const client = contentful.createClient({
  space: "xtu5lv6prgyc",
  accessToken: "R-ibip4-XBCYhGvGoaCCZn33dhFxsXYMoyuSxrRRBlc",
});

function getEntries({ content_type, order }) {
  return client
    .getEntries({
      content_type: content_type,
      select: "fields",
      order,
    })
    .then((entries) =>
      entries.items.map((item) => {
        return {
          ...item.fields,
        };
      })
    );
}

function getAbout() {
  return client.getEntry("4rtVXnHFIRebUf8LuXZIgR");
}

module.exports = {
  getEntries: getEntries,
  getAbout: getAbout,
};
