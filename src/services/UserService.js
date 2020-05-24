const url = "UsersList.json";

/**
 * Get list from the json
 */
export const GetUsers = () => {
    return fetch(url)
        .then(response => response.json());
};

/**
 * Calculate the number of times each city has been visited
 * Create an object with all cities and their corresponding data
 * The object becomes an array of arrays
 * @param users: list with all users and their corresponding info
 * @return a list of lists, each one with a first list with the legend and the rest of lists with a pair of values.
 * For example:  [[ 'City', 'Visits number'], ['Madrid', 2], ['Barcelona', 5]]
 */
export const GetCityStatistics = (users) => {
    let citiesStatistics = {};
    users.forEach( user =>{
        user.places.forEach( city => {
            if (citiesStatistics[city] === undefined ) citiesStatistics[city] = 1
            else citiesStatistics[city] = citiesStatistics[city] + 1
        })
    });
    citiesStatistics = Object.keys(citiesStatistics).map ( function(city, index) {
        return [city, citiesStatistics[city]];
    })
    citiesStatistics.unshift(['City', 'Visits'])
    return citiesStatistics;
}

