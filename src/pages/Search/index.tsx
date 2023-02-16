import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { PageContainer, PageHeader, Card } from '../../subcomponents';
import { fetchSearchResults } from '../../redux/actions';
import Results from './Results';
import { RootState } from '../../store';
import Loader from './Loader';
import { SearchInput, SubmitButton, Error, NoResults } from './subcomponents';

const Search = () => {
  const { error, searchList, isLoading, count } = useSelector(
    (state: RootState) => ({
      error: state.error,
      searchList: state.searchList,
      isLoading: state.isLoading,
      count: state.count
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const [shouldShowResults, setShouldShowResults] = useState(() => {
    return searchList?.length > 0 && !isLoading && !error;
  });
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e?: SyntheticEvent) => {
    e?.preventDefault();
    dispatch(fetchSearchResults(searchValue));
  };

  useEffect(() => {
    setShouldShowResults(searchList?.length > 0 && !isLoading && !error);
  }, [searchList, isLoading, error]);

  return (
    <PageContainer>
      <Card>
        <PageHeader>Search All GitHub Repositories</PageHeader>
        <form onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Search"
            value={searchValue}
            onChange={(e: SyntheticEvent<HTMLInputElement>) =>
              setSearchValue(e.currentTarget.value)
            }
          />
          <SubmitButton onClick={handleSubmit}>submit</SubmitButton>
        </form>
      </Card>

      {error && (
        <Error>
          <span>We're sorry, something went wrong. Please try again.</span>
        </Error>
      )}

      {isLoading && <Loader />}

      {count === 0 && (
        <NoResults>
          No repositories found. Please enter something different.
        </NoResults>
      )}

      {shouldShowResults && <Results />}
    </PageContainer>
  );
};

export default Search;
