import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '../../store';

import { setDetailItem } from '../../redux/actions';

import { ListOptions, SortWrapper, Select, SelectLabel } from './subcomponents';

const SORT_BY = {
  bestMatch: 'BEST_MATCH',
  stars: 'STARS'
};

const Results = () => {
  const { searchList } = useSelector(
    (state: RootState) => ({
      searchList: state.searchList
    }),
    shallowEqual
  );
  console.log(searchList);

  /* this block won't be needed until the last task, do not delete */

  /* const dispatch = useDispatch();
  const handleSetDetail = (item: any) => {
    dispatch(setDetailItem(item));
  }; */

  return (
    <div>
      <ListOptions>
        <SortWrapper>
          <SelectLabel htmlFor="list-sort">Sort By: </SelectLabel>
          <Select name="sort" id="list-sort">
            <option value={SORT_BY.bestMatch}>Best Match (Default)</option>
            <option value={SORT_BY.stars}>Number of Stars</option>
          </Select>
        </SortWrapper>
        <div>
          <SelectLabel htmlFor="language-filter">Language: </SelectLabel>
          {/* styled component that is simply a <select> with css, see subcomponents */}
          <Select name="filter">
            <option value="None">No language selected</option>
          </Select>
        </div>
      </ListOptions>
      {/* render results list here */}
    </div>
  );
};

export default Results;
