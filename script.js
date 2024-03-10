fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log("Asia Countries:", asiaCountries);

      const populationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log("Population Less Than 2 Lakhs:", populationLessThan2Lakhs);

        data.forEach(country => {
      console.log("Country:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("-------------");
    });

    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
    console.log("Total Population:", totalPopulation);

    const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
    console.log("Countries that use US Dollars:", usDollarCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
