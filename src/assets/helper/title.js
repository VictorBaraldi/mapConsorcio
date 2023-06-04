import React from 'react';

export default function ChangeTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, []);
}
