export const launchById = (state, id) => {
    const { launches } = state.launches;

    if (!launches)
        return null;

    return state.launches.launches.filter( launch => launch.flight_number === parseInt(id)).shift();
}