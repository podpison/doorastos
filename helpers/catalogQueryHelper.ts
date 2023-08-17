import { ParsedUrlQuery } from "querystring";
import textToURL from "./textToURL";

const catalogQueryHelper = (
  queryName: string,
  value: string | null,
  queries: ParsedUrlQuery,
  shouldDelete: boolean
) => {
  if (!value) {
    return {
      ...queries,
    };
  }

  if (shouldDelete) {
    let queriesCopy = { ...queries };
    delete queriesCopy[queryName];

    return queriesCopy;
  }

  return {
    ...queries,
    [queryName]: textToURL(value),
  };
};

export default catalogQueryHelper;
