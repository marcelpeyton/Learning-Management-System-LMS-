import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import Navbar from "./components/navbar"; // Import your Navbar component


// Create simple components for each route
import Dashboard from "./pages/dashboard";
//const Courses = () => <h2>Courses Page</h2>;
import JavascriptClass from "./pages/syllabus/javascriptClass";
import PythonClass from "./pages/syllabus/pythonClass";
import TypescriptClass from "./pages/syllabus/typescriptClass";
import Lesson from "./pages/lesson";
import PythonLesson from "./pages/lessons/Pythonlessons";
import JavaScriptLesson from "./pages/lessons/JSlessons";
import TypeScriptLesson from "./pages/lessons/TSlessons";
import Login from "./pages/Login";
import Syllabus from "./pages/syllabus";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Quizzes from "./pages/Quizzes";
import Tests from "./pages/Tests";
import Grades from "./pages/Grades";

import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



// Construct our main GraphQL API endpoint

const SERVER_URI = import.meta.env.VITE_GRAPHQL_URI

const httpLink = createHttpLink({
  uri: SERVER_URI,
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="app-container">
      <Navbar />
        <div className="router-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/syllabus" element={<Syllabus />}>
            <Route path="javascript" element={<JavascriptClass />} />
            <Route path="typescript" element={<TypescriptClass />} />
            <Route path="python" element={<PythonClass />} />
          </Route >
          <Route path="/lessons" element={<Lesson />}>
            <Route path="python" element={<PythonLesson />} />
            <Route path="javascript" element={<JavaScriptLesson />} />
            <Route path="typescript" element={<TypeScriptLesson />} />
          </Route>
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        </div>
      </div>
    </Router>
    </ApolloProvider>
  );
};

export default App;
