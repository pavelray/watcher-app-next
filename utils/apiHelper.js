import useSWR from "swr"
import { fetcher } from "./apiUtills"
import { API_LOCATION_URL } from "./constants"

export const useUserLocation = () => {
    const { data, error } = useSWR(`${API_LOCATION_URL}`, fetcher);

    return {
        location: data,
        isLoading: !error && !data,
        isError: error
    }
}
