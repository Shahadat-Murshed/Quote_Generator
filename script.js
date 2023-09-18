fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    this.data = data;
  });

const displayQuote = () => {
  let index = Math.floor(Math.random() * data.length);

  let quote = data[index].text;
  let author = data[index].author.split(",")[0];

  if (author == "type.fit") {
    author = "Anonymous";
  } else if (!author) {
    author = "Anonymous";
  } else {
    author = author;
  }

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
};
