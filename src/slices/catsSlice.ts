import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Breed, Cat, CatsState } from '@/types/cats';

const initialState: CatsState = {
  cats: [],
  breeds: [],
  loading: false,
  error: null,
};

export const fetchCats = createAsyncThunk('cats/fetchCats', async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  return response.json() as Promise<Cat[]>;
});

export const fetchBreeds = createAsyncThunk('cats/fetchBreeds', async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds');
  return response.json() as Promise<Breed[]>;
});

export const searchCatsByBreed = createAsyncThunk('cats/searchByBreed', async (breedId: string) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}`);
  return response.json() as Promise<Cat[]>;
});

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.cats = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.breeds = action.payload;
      });
  },
});

export default catsSlice.reducer;