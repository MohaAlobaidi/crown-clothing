
import React from 'react'
import './shop.styles.scss'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
 import CollectionPage from './../collection/collection.component'
const ShopPage = ({match})=>{

    return <div className = "shop-page">  

    {/* <Route exact path='/shop' component={CollectionsOverview}/> */}
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    
    {/* <Route path='/shop/:collectionId' component={CategoryPage }/> */}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    
    </div>
    }

export default  ShopPage




//// voor dat ik shop.data naar redux >> shop  gestuurd
// import React,{Component} from 'react'
// import './shop.styles.scss'
// import SHOP_DATA from './shop.data'
// import CollectionPreview from './../../components/collection-preview/collection-preview.component'

// class ShopPage extends Component{
//     constructor(){
//         super()
//         this.state={
//             collections:SHOP_DATA
//          }
//     }

//     render(){
//         const {collections}= this.state
//         return <div className = "shop-page"> 
//             {/* {
//             collections.map(collection =>
//                 <CollectionPreview key={collection.id} {...collection}/>
//                 )
//             } */}


// {
//             collections.map(({id,...otherCollectionProps}) =>
//                 <CollectionPreview key={id} {...otherCollectionProps}/>
//                 )
//             }
//         </div>
//     }
// }

// export default ShopPage