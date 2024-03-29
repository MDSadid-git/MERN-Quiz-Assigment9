import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-60">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of react router?
        </div>
        <div className="collapse-content">
          <p>
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does context api work?
        </div>
        <div className="collapse-content">
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does Work useRef?
        </div>
        <div className="collapse-content">
          <p>
            useRef returns a mutable ref object whose .current property is
            initialized to the passed argument ( initialValue ). The returned
            object will persist for the full lifetime of the component.
            Essentially, useRef is like a “box” that can hold a mutable value in
            its .current property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
