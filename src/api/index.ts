import axios from 'axios'
import { homeUrl } from "/Users/rafaelasilva/Desktop/personal-web/wish-a-movie/src/constants/index";

export const getPopular = async () => {
    const response = await axios.get(homeUrl);
    return response
}
