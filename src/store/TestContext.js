import React, { createContext, useReducer } from "react"

export const TestContext = createContext({})

const initialState = {
    userLoginData: null,
    uiControlData: {
        currentMenu: 'engagement',
    },
    inputSearch : "spy",
    productInCart : [],
    countInCart : "0",
    dataShow : []
}

const testReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SELECTED_MENU':
            return {
                ...state,
                uiControlData: {
                    ...state.uiControlData,
                    currentMenu: payload
                }
        }
        case 'SET_INPUT_SEARCH':
            return {
            ...state,
            inputSearch : payload
        }   
        case 'SET_PRODUCT_IN_CART':
            return {
            ...state,
            productInCart : payload
        }
        case 'SET_COUNT_IN_CART':
            return {
            ...state,
            countInCart : payload
        }
        case 'SET_DATA_SHOW':
            return {
            ...state,
            dataShow : payload
        }
        default:
            return state
    }
}

export const TestProvider = ({ children }) => {
    const [testState, testDispatch] = useReducer(
        testReducer,
        initialState
    )

    const {uiControlData,inputSearch,productInCart,countInCart,dataShow} = testState
    const selectedMenu = payload => 
        testDispatch({
            type: "SELECTED_MENU",
            payload
    })
    const setInputSearch = payload => 
        testDispatch({
            type: "SET_INPUT_SEARCH",
            payload
    })
    const setProductInCart = payload => 
        testDispatch({
            type: "SET_PRODUCT_IN_CART",
            payload
    })
    const setCountInCart = payload => 
        testDispatch({
            type: "SET_COUNT_IN_CART",
            payload
    })
    const setDataShow = payload => 
        testDispatch({
            type: "SET_DATA_SHOW",
            payload
    })

    return (
        <TestContext.Provider value={
                { 
                    selectedMenu, 
                    uiControlData,
                    setInputSearch,
                    inputSearch,
                    setProductInCart,
                    productInCart,
                    setCountInCart,
                    countInCart,
                    setDataShow,
                    dataShow
                }
            }
        >
            {children}

        </TestContext.Provider>
    )
}

