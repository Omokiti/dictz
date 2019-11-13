const searchButton = document.querySelector("#btn");

const getMeaning = () => {
  const word = document.querySelector("#myword");
  document.querySelector('.defs').innerHTML = ''

  fetch(`https://wordsapiv1.p.rapidapi.com/words/${word.value}?definitions`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      'X-RapidAPI-Key': 'a0b0444443mshc144252378b359bp101ed0jsnf58fa2955de1',
      'Content-Type': 'application/json'
    },

  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      let details = document.querySelector('.word')
      let defz = document.querySelector('.defs')
      let example = document.querySelector('.example')
      let info = data.results;
      if (data.word == undefined) {
        details.innerHTML = data.error="word not found"
      }
      else {
        details.innerHTML = data.word

        info.forEach((result) => {
          defz.innerHTML += `
      <li>
      ${result.definition}  <br/>
      <br/>
      partOfSpeech: ${result.partOfSpeech} <br/>
         <br/>
      example:${result.examples} <br/>
      <br/>
      </li>
    
     `

        });
      }

    })
    .catch((error) => console.error(error))

}





searchButton.addEventListener('click', getMeaning)




















