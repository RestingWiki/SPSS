import React from 'react';
import { Helmet } from 'react-helmet';
const Metadata = () => {
  return (
    <Helmet>
      <title>Trang chủ chung</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
      />
      <link rel="stylesheet" href="./style.css" />
    </Helmet>
  );
};

export default Metadata;
