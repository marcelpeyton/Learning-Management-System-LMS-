import React from 'react';

const TSlessons: React.FC = () => {
    return (
        <>
            <h1>Fundamentals of TypeScript Lessons</h1>

            <h2> Weekly Lessons Breakdown </h2>

            <h3>Week 1: Introduction to TypeScript</h3>
            <p>The course begins with an overview of TypeScript, highlighting its advantages over JavaScript, including static typing and improved code maintainability. Students will set up a TypeScript development environment by installing Node.js, TypeScript, and a code editor like Visual Studio Code. They will learn about TypeScript's type system, covering basic types such as number, string, boolean, and any. Hands-on exercises will involve declaring typed variables and exploring how TypeScript prevents common JavaScript errors.
            </p>

            <h3>Week 2: Advanced TypeScript Types</h3>
            <p>This week introduces more complex TypeScript features, beginning with function type annotations, where students will define parameter and return types to ensure type safety. Next, they will explore interfaces and type aliases, learning how to structure objects and enforce consistency. The final class will cover union and intersection types, enabling students to create flexible yet strongly typed data structures. Practical exercises will involve defining reusable types and implementing them in small projects.
            </p>

            <h3>Week 3: Object-Oriented Programming with TypeScript</h3>
            <p>Students will delve into TypeScript's object-oriented programming features, starting with classes and inheritance, learning how to structure code using class, extends, and super. They will then explore abstract classes and interfaces to enforce structure in their applications. The week concludes with an introduction to generics, allowing students to write reusable and type-safe code. A hands-on project will involve building a simple class-based system, such as a user authentication model or a product catalog.
            </p>

            <h3>Week 4: TypeScript Tooling and Best Practices</h3>
            <p>This week focuses on TypeScript's tooling ecosystem. Students will learn to compile TypeScript code using the TypeScript Compiler (tsc) and configure project settings with tsconfig.json. They will also explore best practices for maintaining clean code, including linting and formatting with ESLint and Prettier. Hands-on exercises will involve setting up a fully configured TypeScript project and ensuring code quality with proper tooling.
            </p>

            <h3>Week 5: Final Project</h3>
            <p>In the final week, students will apply their knowledge by building a small TypeScript-based application. They will integrate type annotations, interfaces, classes, and tooling best practices to create a well-structured project. This could be a simple task manager, a weather app fetching API data, or a basic inventory system. By the end of the week, students will present their projects, receive feedback, and discuss next steps for further learning in TypeScript and modern web development.
            </p>
        </>
    );
};

export default TSlessons;

