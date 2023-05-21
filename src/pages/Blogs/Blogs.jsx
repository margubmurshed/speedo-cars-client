import React from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Speedo Cars | Blogs</title>
      </Helmet>
      <div>
        <h2>Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
        <p>A: Access token and refresh token are used for authentication and authorization systems. Access token is issued to client after successful authentication. It has a limited lifetime and expires after a short period of time. We can access protected resources through Access token. On the other hand, refresh tokens are used to obtain a new access token when current access token expires. Refresh tokens are usually stored in an HttpOnly cookie on client side.</p>
      </div>
      <div>
        <h2>Q: Compare SQL and NoSQL databases?</h2>
        <p>A: SQL databases use a predefined schema that defines the structure of the data and the relationships between tables. On the other hand, NoSQL DBs are schema less, allowing for dynamic and unstructured data. </p>
      </div>
      <div>
        <h2>Q: What is express js? What is Nest JS ?</h2>
        <p>A: Express is a web application framework for Node.js. Express.js gives us powerful features like routing, middleware, request handling, response management. It allows developers to create routes, handle HTTPS requests and many more. On the other hand, NextJS is a Node.js framework for building scalable server side applications build on top of Express.js and uses TypeScript as primary language. Next Js   provides modular, organized structure for building server side applications. It follows the architecture principles of Angular JS.</p>
      </div>
      <div>
        <h2>Q: What is MongoDB aggregate and how does it work ?</h2>
        <p>A: In mongodb, aggregate method is used to perform data processing and transformation operations on collections, allows you to perform complex queries on data stored in mongodb. It takes an array of pipeline stages as parameter. Then processes documents from the input collection based on the pipeline stages. Then they goes through transformations based on the specific stages. Eventually final output can be returned as a curson or array depending on some factors.</p>
      </div>
    </div>
  );
};

export default Blogs;
