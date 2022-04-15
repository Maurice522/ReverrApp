import axios from 'axios';
export const homeScreenQuotes = (setQoute, setAuthors) => {
  var options = {
    method: 'POST',
    url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
      'x-rapidapi-key': '4a01d589d6msh0d43b1f33cc9008p105745jsn14a9e364f1ea',
    },
    data: {key1: 'value', key2: 'value'},
  };
  axios
    .request(options)
    .then(function (response) {
      var string = '';
      var author = '';
      var isString = false;
      var isAuthor = false;
      for (let i in response.data) {
        if (response.data[i] == '"') isString = !isString;
        if (isString) string += response.data[i];
        else if (response.data[i] == '-') isAuthor = !isAuthor;
        if (isAuthor) author += response.data[i];
      }
      isAuthor = false;
      string += '"';
      setQoute(string);
      setAuthors(author);
    })
    .catch(function (error) {
      console.error(error);
    });
};
