const url = "UsersList.json";

export const GetUsers = () => {
    return fetch(url)
        .then(response => response.json());
};

export const GetCityStatistics = (users) => {
    let citiesStatistics = {};
    console.log(citiesStatistics);
    users.forEach( user =>{
        user.places.forEach( city => {
            if (citiesStatistics[city] === undefined ) citiesStatistics[city] = 1
            else citiesStatistics[city] = citiesStatistics[city] + 1
        })
        console.log(citiesStatistics);
    });
    citiesStatistics = Object.keys(citiesStatistics).map ( function(city, index) {
        console.log(citiesStatistics);
        return [city, citiesStatistics[city]];
    })
    citiesStatistics.unshift(['City', 'Visits'])
    console.log(citiesStatistics);
    return citiesStatistics;
}

