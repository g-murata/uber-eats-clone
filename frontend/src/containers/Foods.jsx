// --- 次にuseEffectを追加 ---
import React, { Fragment, useEffect } from 'react';

// --- ここから追加 ---
// apis
import { fetchFoods } from '../apis/foods';
// --- ここまで追加 ---

export const Foods = ({
  match
}) => {
  useEffect(() => {
    fetchFoods(match.params.restaurantsId)
      .then((data) =>
        console.log(data)
      )
  }, [])

  return (
    <Fragment>
      フード一覧
    </Fragment>
  )
}
