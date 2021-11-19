import React, { useEffect, useState } from "react";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import ShoppingList from "../ShoppingList";
import {Container, Wrapper} from './App.styles'
import extractPercentage from "../../utils/extractPercentage";
import Calculator from "../Calculator";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, selectSelectedProducts, selectSelectedProductTotalPrice } from "../../store/Products/products.selectors";
import { toggleProduct } from "../../store/Products/Products.actions";



function App () {
    const dispatch = useDispatch();
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const SelectedProducts = useSelector(selectSelectedProducts)
    const products = useSelector(selectAllProducts)
    const totalPrice = useSelector(selectSelectedProductTotalPrice)



    function handleToggle (id) {
        const newProducts = products.map(product =>
            dispatch(toggleProduct(id)))
        }

    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer 
            left={
            <ShoppingList 
                title="Produtos Disponíveis"
                products={products}
                onToggle={handleToggle}
                />}
                
            middle={
            <ShoppingList 
                title="Sua Lista de Compras"
                products={SelectedProducts}
                onToggle={handleToggle}
                />}
                
            right= {<div>
                statisticas

                <LineChart 
                color={colors[0]}
                tittle="Saudável" 
                percentage={extractPercentage(
                    SelectedProducts.length,
                    SelectedProducts.filter(product => product.tags.includes('healthy'))
                    .length
                )} 
                />
                <LineChart 
                color={colors[1]}
                tittle="Não tão saudável" 
                percentage={extractPercentage(
                    SelectedProducts.length,
                    SelectedProducts.filter(product => product.tags.includes('junk'))
                    .length
                )} 
                />
                <LineChart 
                color={colors[2]}
                tittle="Limpeza" 
                percentage={extractPercentage(
                    SelectedProducts.length,
                    SelectedProducts.filter(product => product.tags.includes('cleaning'))
                    .length
                )} 
                />
                <LineChart 
                color={colors[3]}
                tittle="Outros" 
                percentage={extractPercentage(
                    SelectedProducts.length,
                    SelectedProducts.filter(product => product.tags.includes('others'))
                    .length
                )} 
                />
                <div style={{ marginTop:12}}>
                    <h2 style={{ fontWeight: 400, fontSize:12, color:'#00364A'}}>
                    Previsão de Gastos:
                    </h2>
                    <div style={{fontSize: 24}}>
                        {totalPrice.toLocaleString('pt-br', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </div>

                   <Calculator />
                </div>

                
            </div>}
            
            />
        </Container>
    </Wrapper>
}

export default App


