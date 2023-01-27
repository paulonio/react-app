import React from 'react';
import { waitFor } from '@testing-library/react';
import { StateProvider } from './test-utils';
import renderer, { act } from 'react-test-renderer';
import Content from './Content';
import { fetchData } from '../../fetch/fetch';

const MOCK_DATA = {
  info: {
    count: 29,
    pages: 2,
    next: 'https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Mocked name',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
  ],
};

jest.mock('components/fetch/fetch', () => ({
  fetchData: jest.fn(),
  fetchByCharacterName: jest.fn(),
}));

jest.mock('components/cards/Cards', () => `Cards`);
jest.mock('components/content-header/ContentHeader', () => `ContentHeader`);
jest.mock('./utils/CustomSelect', () => `CustomSelect`);
jest.mock('components/loader/Loader', () => `Loader`);
jest.mock('components/modal/Modal', () => `Modal`);
jest.mock('./content-buttons/ContentButtons', () => `ContentButtons`);

describe('Content', () => {
  const mockFetchData = fetchData as jest.MockedFunction<typeof fetchData>;

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('renders content component on mount', async () => {
    const tree = renderer.create(
      <StateProvider>
        <Content />
      </StateProvider>
    );

    expect(tree).toMatchSnapshot();

    await act(async () => {
      await waitFor(() => expect(mockFetchData).toHaveBeenCalledTimes(1));
    });
  });

  it('renders content component after data loaded', async () => {
    mockFetchData.mockResolvedValue(MOCK_DATA);

    const tree = renderer.create(
      <StateProvider>
        <Content />
      </StateProvider>
    );

    await act(async () => {
      await waitFor(() => {
        expect(mockFetchData).toHaveBeenCalledTimes(1);
      });
    });

    expect(tree).toMatchSnapshot();
  });

  it('renders content component after fetch rejected', async () => {
    mockFetchData.mockResolvedValue(null);

    const tree = renderer.create(
      <StateProvider>
        <Content />
      </StateProvider>
    );

    await act(async () => {
      await waitFor(() => expect(mockFetchData).toHaveBeenCalledTimes(1));
    });
    expect(tree).toMatchSnapshot();
  });
});
