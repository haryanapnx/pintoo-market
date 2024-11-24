import { useState, useCallback, useEffect } from "react";

const useFilterWithQueryParamToken = () => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [search, setSearch] = useState<string>("");

  const setQueryParam = useCallback((key: string, val: string | null) => {
    const params = new URLSearchParams(window.location.search);
    if (val) {
      params.set(key, val);
    } else {
      console.log(key);
      
      params.delete(key);
    }
    window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
  }, []);

  const handleSort = useCallback(
    (key: string) => {
      let newSortOrder: "asc" | "desc" | null = null;

      if (sortKey !== key) {
        newSortOrder = "asc";
      } else if (sortOrder === "asc") {
        newSortOrder = "desc";
      } else if (sortOrder === "desc") {
        newSortOrder = null;
      } else {
        newSortOrder = "asc";
      }

      setSortKey(newSortOrder ? key : null);
      setSortOrder(newSortOrder);

      const keyConfig = newSortOrder ? key : null;
      setQueryParam("filter", keyConfig);
      setQueryParam("sort", newSortOrder);
    },
    [sortKey, sortOrder, setQueryParam],
  );

  const handleSearch = useCallback(
    (value: string) => {
      setSearch(value);
      setQueryParam("search", value);
    },
    [setQueryParam],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get("filter");
    if (filter) {
      setSortKey(filter);
      setSortOrder((params.get("sort") as "asc" | "desc") || null);
    }

    if (params.has("search")) {
      setSearch(params.get("search") || "");
    }
  }, []);

  return {
    sortKey,
    sortOrder,
    search,
    handleSort,
    handleSearch,
  };
};

export default useFilterWithQueryParamToken;