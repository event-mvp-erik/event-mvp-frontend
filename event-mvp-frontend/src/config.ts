const isProduction = true;

export const apiUrls = {
    eventsApi: isProduction
        ? "https://event-api-erik-d7hhgyfwb4hhfsde.northeurope-01.azurewebsites.net/api"
        : "http://localhost:5299/api",

    bookingsApi: isProduction
        ? "https://eventmvpbookingsapi-g3bnayghcaftbecv.northeurope-01.azurewebsites.net/api"
        : "http://localhost:5203/api",
};
