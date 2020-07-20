import {SET_SHOW} from "../constants";

const initialState = {
    legend: {
        colors: [],
        show: {
            cases: true,
            deaths: true,
            recovered: true,
        },
        date: {
            from: "",
            to: "",
        }
    }
}

function legend(state = initialState, action) {
    switch (action.type) {
        case SET_SHOW:
            
            const [name, isShow] = action.payload
            console.log(name, isShow)
            return {
                ...state,
                legend: {
                    ...state.legend,
                    show: {
                        ...state.legend.show,
                        [name]: isShow,
                    }
                    
                }
            };
            default:
                return state;
    }
}

export default legend;