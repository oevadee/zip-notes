import axios from "axios";
import { createEffect, createSignal } from "solid-js";

export const useDataFetch = <T>(url: string, objectKey: string) => {
  const [data, setData] = createSignal<null | T>(null);
  const [error, setError] = createSignal();
  const [isLoading, setLoading] = createSignal(false);

  const fetchData = async () => {
    console.log("Running fetch");
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data[objectKey]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  createEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, error, isLoading, refetch };
};
