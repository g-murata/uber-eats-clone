// --- 次でuseReducerを追加 ---
import React, { Fragment, useEffect, useReducer } from 'react';

// --- ここから追加 ---
// reducers
import {
  initialState as foodsInitialState,
  foodsActionTyps,
  foodsReducer,
} from '../reducers/foods';
// --- ここまで追加 ---

// apis
import { fetchFoods } from '../apis/foods';

// --- ここから追加 ---
// constants
import { REQUEST_STATE } from '../constants';
// --- ここまで追加 ---

export const Foods = ({
  match // --- matchを追加 ---
}) => {
  // --- ここから追加 ---
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);
  // --- ここまで追加 ---

  useEffect(() => {
    // --- ここから修正 ---
    dispatch({ type: foodsActionTyps.FETCHING });
    fetchFoods(match.params.restaurantsId)
      .then((data) => {
        dispatch({
          type: foodsActionTyps.FETCH_SUCCESS,
          payload: {
            foods: data.foods
          }
        });
      })
    // --- ここまで修正 ---
  }, [])

  return (
    <Fragment>
      // --- ここから修正 ---
      {
        foodsState.fetchState === REQUEST_STATE.LOADING ?
          <Fragment>
            <p>
              ロード中...
            </p>
          </Fragment>
          :
          foodsState.foodsList.map(food =>
            <div key={food.id}>
              {food.name}
            </div>
          )
      }
      // --- ここまで修正 ---
    </Fragment>
  )
}
