import { all, fork, put } from "@redux-saga/core/effects";
import { setError } from "./application";
import { formWatchers } from "./form";


export default function* initializeWatchers(): any {

    try {

        // Initialize all watchers here
        yield all([
            fork(formWatchers),
        ]);

    }
    catch (err) {
        yield put(setError(err));
    }

}