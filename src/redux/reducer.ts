const initialState = {
    name: "",
    isAuth: false
};

export type MainStateType = typeof initialState;

const SET_NAME = "main/SET_NAME" as const;
const SET_AUTH = "main/SET_AUTH" as const;

export const reducer = (state = initialState, action: ActionTypes): MainStateType => {
    switch (action.type) {
        case SET_NAME:
        case SET_AUTH:

            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export const setName = (name: string) => ({
    type: SET_NAME,
    payload: {name},
});

export const setAuth = (isAuth: boolean) => ({
    type: SET_AUTH,
    payload: {isAuth},
});

type ActionTypes = ReturnType<typeof setName> | ReturnType<typeof setAuth>
