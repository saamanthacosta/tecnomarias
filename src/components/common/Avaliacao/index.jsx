import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function Avaliacao({ readOnly, onChange, value }) {
  return <>
    <Rating
      precision={readOnly ? 0.5 : 1}
      readOnly={readOnly}
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
    />
  </>
}