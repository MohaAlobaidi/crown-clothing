import React,{Component} from 'react'
import './shop.styles.scss'
import SHOP_DATA from './shop.data'
import CollectionPreview from './../../components/collection-preview/collection-preview.component'

class ShopPage extends Component{
    constructor(){
        super()
        this.state={
            collections:SHOP_DATA
         }
    }

    render(){
        const {collections}= this.state
        return <div className = "shop-page"> 
            {/* {
            collections.map(collection =>
                <CollectionPreview key={collection.id} {...collection}/>
                )
            } */}


{
            collections.map(({id,...otherCollectionProps}) =>
                <CollectionPreview key={id} {...otherCollectionProps}/>
                )
            }
        </div>
    }
}

export default ShopPage