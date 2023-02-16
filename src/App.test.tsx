import React from 'react';
import * as Redux from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import Search from './pages/Search';
import Results from './pages/Search/Results';
import Detail from './pages/Detail';
import { createStore } from 'redux';
import reducer from './redux/reducer';

const initialState: any = {
  isLoading: false,
  searchList: []
};

const loadingState: any = {
  isLoading: true
};

const errorState: any = {
  error: { message: 'really bad error' }
};

const noResultsState: any = {
  count: 0
};

const resultsState: any = {
  isLoading: false,
  searchList: [
    {
      id: 122333,
      language: 'JavaScript',
      full_name: 'react',
      name: 'react',
      description: 'Description of react repo',
      stargazers_count: 111111,
      owner: {
        login: 'mee'
      }
    },
    {
      id: 987678,
      language: 'Swift',
      full_name: 'reactSwift',
      name: 'reactSwift',
      description: 'Description of react swift repo',
      stargazers_count: 112222,
      owner: {
        login: 'youuu'
      }
    }
  ],
  detailItem: {
    id: 122333,
    language: 'JavaScript',
    full_name: 'react',
    name: 'react',
    description: 'Description of react repo',
    stargazers_count: 111111,
    owner: {
      login: 'mee'
    }
  }
};

function render(
  ui: any,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {} as any
) {
  function Wrapper({ children }: any) {
    return <Redux.Provider store={store}>{children}</Redux.Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

test('renders search page', () => {
  const { getByText } = render(<Search />, { ...initialState });

  const submitButton = getByText(/submit/i);
  const placeholder = getByText(/search/i);

  expect(submitButton).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
});

test('renders loader', () => {
  const { getByTestId } = render(<Search />, { initialState: loadingState });

  const loader = getByTestId('loader');

  expect(loader).toBeInTheDocument();
});

test('renders error', () => {
  const { getByText } = render(<Search />, { initialState: errorState });

  const error = getByText(
    "We're sorry, something went wrong. Please try again."
  );

  expect(error).toBeInTheDocument();
});

test('renders no results text', () => {
  const { getByText } = render(<Search />, { initialState: noResultsState });

  const noResults = getByText(
    'No repositories found. Please enter something different.'
  );

  expect(noResults).toBeInTheDocument();
});

test('renders results page', () => {
  const { getByText } = render(<Results />, { initialState: resultsState });

  const reactItem = getByText('react', { exact: true });
  const reactSwiftItem = getByText('reactSwift', { exact: true });
  const sortBySelect = getByText('Sort By:', { exact: true });
  const filterSelect = getByText('Language:', { exact: true });

  expect(reactItem).toBeInTheDocument();
  expect(reactSwiftItem).toBeInTheDocument();
  expect(sortBySelect).toBeInTheDocument();
  expect(filterSelect).toBeInTheDocument();
});

test('renders detail page', () => {
  const { getByText } = render(<Detail />, { initialState: resultsState });

  const name = getByText('react', { exact: true });
  const language = getByText('JavaScript', { exact: true });
  const starCount = getByText('111111', { exact: true });
  const description = getByText('Description of react repo', { exact: true });
  const owner = getByText('mee', { exact: true });

  expect(name).toBeInTheDocument();
  expect(language).toBeInTheDocument();
  expect(starCount).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(owner).toBeInTheDocument();
});
