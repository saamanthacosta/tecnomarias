import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function Avaliacao({ readOnly, onChange, value }) {
  return <>
    <Rating
      precision={0.5}
      readOnly={readOnly === null ? true : false}
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
    />
  </>
}