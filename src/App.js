import {
  Route,
  RouterProvider,
  Navigate,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/quotes" />} />
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
