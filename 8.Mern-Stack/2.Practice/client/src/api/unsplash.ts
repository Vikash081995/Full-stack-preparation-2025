import axios from "axios";

const searchImages = async (term: string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
