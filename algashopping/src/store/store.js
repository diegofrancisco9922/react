import { createStore, combineReducers} from 'redux'
import CalculatorReducer from './calculator/Calculator.reducer'
import ProductsReducer from './Products/Products.reducer'


const rootReducer = combineReducers({
    calculator: CalculatorReducer,
    products: ProductsReducer
})

const store = createStore(rootReducer)

export default store