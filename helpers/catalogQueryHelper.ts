import { ParsedUrlQuery } from "querystring";
import textToURL from "./textToURL";

const catalogQueryHelper = (
  queryName: string,
  value: string | string[] | null,
  queries: ParsedUrlQuery,
  shouldDelete: boolean,
  unwantedQueries: string[] = [],
  formatItems: boolean = true
) => {
  if (!value) {
    return {
      ...queries,
    };
  }

  let queriesCopy = { ...queries };

  if (unwantedQueries.length > 0) {
    unwantedQueries.forEach((q) => {
      delete queriesCopy[q];
    });
  }

  if (shouldDelete) {
    delete queriesCopy[queryName];

    return queriesCopy;
  }

  if (!formatItems) {
    return {
      ...queriesCopy,
      [queryName]: value,
    };
  }

  return {
    ...queriesCopy,
    [queryName]:
      typeof value === "string"
        ? textToURL(value)
        : value.map((v) => textToURL(v)),
  };
};

export default catalogQueryHelper;
