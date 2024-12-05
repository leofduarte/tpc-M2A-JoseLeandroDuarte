import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchBreeds, fetchCats, searchCatsByBreed } from '../slices/catsSlice';

const CatApi: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [selectedBreed, setSelectedBreed] = useState("");
  const { cats, breeds, loading } = useSelector((state: RootState) => state.cats);

  useEffect(() => {
    dispatch(fetchBreeds());
    dispatch(fetchCats());
  }, [dispatch]);

  useEffect(() => {
    if (selectedBreed) {
      dispatch(searchCatsByBreed(selectedBreed));
    }
  }, [selectedBreed, dispatch]);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cat Gallery</h1>
      <div className="flex justify-center mb-6">
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Breeds</option>
          {breeds?.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cats?.map((cat) => (
          <div key={cat.id} className="rounded overflow-hidden shadow-lg">
            <img src={cat.url} alt="cat" className="w-full h-48 object-cover" />
            {cat.breeds?.[0] && (
              <div className="p-4">
                <p className="font-bold">{cat.breeds[0].name}</p>
                <p className="text-sm text-gray-600">
                  {cat.breeds[0].temperament}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatApi;