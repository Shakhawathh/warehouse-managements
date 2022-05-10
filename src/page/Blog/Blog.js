import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <h3>Difference between javascript and nodejs ?</h3>
            <p>Both of these are used for programming. But there is a significant difference between Node.JS and Javascript. JavaScript (abbreviated as JS) is a lightweight scripting language that is object-oriented. It is used for developing HTML pages that are dynamic and have various interactive effects on their web pages. The Node.JS, on the other hand, helps in representing a list of all the methods and objects that the JavaScript code can access when run via node interpreters or in the V8 engine.</p>
        <br/>
        <h3> Differences between sql and nosql database ?</h3>
        <p>SQL databases are older so they have a more established fixed schema design and structure. NoSQL databases are easily scalable, flexible and relatively simple to use due to their flexible schema. SQL is the approach used to interact with relational databases, while NoSQL is used to interact with non-relational databases.</p>
        
        <br/>
        <h3> What is the purpose of jwt and how does it work</h3>
        <p>A JWT is a mechanism to verify the owner of some JSON data It’s an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed.

When a server receives  JWT, it can guarantee the data it contains can be trusted because it’s signed by the source. No middleman can modify a JWT once it’s sent.</p>
        </div>
    );
};

export default Blog;