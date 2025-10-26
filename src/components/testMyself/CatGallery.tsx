import { useState, useEffect, useMemo, useCallback } from "react"; // Optional styling file

const CatGallery = () => {
  // Component state
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [breed, setBreed] = useState("");
  const [breedsList, setBreedsList] = useState([]);

  // API configuration
  const API_KEY =
    "live_h2IdIT8jgPIE3MIF26PfJ7D4YJODhSP6idgto49yAhLQD11gHZ04vbiE71qkgo1i";
  const BASE_URL = "https://api.thecatapi.com/v1";

  // Fetch cat images

 const fetchCats =  useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let url = `${BASE_URL}/images/search?limit=${limit}`;
      if (breed) url += `&breed_ids=${breed}`;

      const response = await fetch(url, {
        headers: {
          "x-api-key": API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch cats: ${response.status}`);
      }

      const data = await response.json();
      setCats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  },[limit , breed]
)
  
  // Fetch list of all breeds
  const fetchBreeds = async () => {
    try {
      const response = await fetch(`${BASE_URL}/breeds`, {
        headers: {
          "x-api-key": API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch breeds");
      }

      const data = await response.json();
      setBreedsList(data);
    } catch (err) {
      console.error("Error fetching breeds:", err);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchCats();
    fetchBreeds();
  }, []);

  // Fetch when limit or breed changes
  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  // Handle breed selection
  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  // Handle limit change
  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
  };

  // Refresh cats
  const handleRefresh = () => {
    fetchCats();
  };


  const sayHello = useCallback( () => {
    console.log(cats[0]);
  },[cats])

  const fiestCatInRial = useMemo(() => {
    return cats[0].price * 94000;
  }, [cats]);

  return (
    <div className="cat-gallery">
      <header>
        <h1>Cat Gallery</h1>

        <div className="controls">
          <div className="control-group">
            <label htmlFor="limit">Number of cats:</label>
            <select id="limit" value={limit} onChange={handleLimitChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="breed">Filter by breed:</label>
            <select id="breed" value={breed} onChange={handleBreedChange}>
              <option value="">All Breeds</option>
              {breedsList.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleRefresh}>Refresh</button>
        </div>
      </header>

      {loading && <div className="loading">Loading cute cats...</div>}

      {error && (
        <div className="error">
          Error: {error}
          <button onClick={fetchCats}>Try again</button>
        </div>
      )}

      <div className="cats-grid">
        {cats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <img
              src={cat.url}
              alt={cat.breeds?.[0]?.name || "Random cat"}
              loading="lazy"
            />
            {cat.breeds?.[0] && (
              <div className="cat-info">
                <h3>{cat.breeds[0].name}</h3>
                <p>{cat.breeds[0].temperament}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatGallery;
