import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer RSKod-yQVCeO2GJhjencoFPMAjTd1Okaw8ht2KI8VU4GvX7a2ghY7pAZENq6zcd1WGGz696-V-5NDOeCCQ7PnG1pu_ITuUX94SEep9sEYOV98V5o_ZsdOrGYxu2lYHYx'
    }
});