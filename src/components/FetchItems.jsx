import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  markFetchDone,
  fetchingStarted,
  fetchingFinished,
} from "../store/fetchStatusSlice";

import { addInitialItems } from "../store/itemsSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const { currentlyFetching, fetchDone } = fetchStatus;
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone === true) {
      return;
    }
    dispatch(fetchingStarted());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        dispatch(addInitialItems(data.items));
        if (data.items.length != 0 || data.items != undefined) {
          dispatch(markFetchDone());
          dispatch(fetchingFinished());
        }
      });
  }, [fetchDone, dispatch]);

  return (
    <div>
      {currentlyFetching && (
        <div className=" text-center m-16 p-16 animate-pulse text-3xl antialiased font-thin">
          Getting the Best Items for you!!
        </div>
      )}
    </div>
  );
};
export default FetchItems;
