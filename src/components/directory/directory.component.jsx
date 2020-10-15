import React,{Component} from 'react'
import './directory.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import MenuItem from './../menu-item/menu-item.component'
import {selectDirectorySections} from './../../redux/directory/directory.selecrors'



const Directory =({sections})=> {
  
        return(
         <div className='directory-menu'>
         {/* {
                this.state.sections.map(section => <MenuItem key={section.id} {...section}/> )  
          } */}

          {
            sections.map(({id,...otherSectionProps}) =>
        
              <MenuItem key={id} {...otherSectionProps}/>  
            )
          }
      
         </div>
        )
     }

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})

export default connect(mapStateToProps,null) (Directory)





////  قبل عمل ملف للديؤكتوري في الردكس
// import React,{Component} from 'react'
// import './directory.styles.scss'
// import MenuItem from './../menu-item/menu-item.component'
// class Directory extends Component {
//     constructor(){
//         super()
//     this.state ={
//         sections:[
//             {
//                 title: 'hats',
//                 // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                 imageUrl: 'images/hats.png', // local file in public/images/
//                 id: 1,
//                 linkUrl: 'shop/hats'      
//             },
//             {
//                 title: 'jackets',
//                 // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                 imageUrl: 'images/jackets.png', // local file in public/images/
//                 id: 2,
//                 linkUrl: 'shop/jackets'
//             },
//             {
//                 title: 'sneakers',
//                 // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                 imageUrl: 'images/sneakers.png', // local file in public/images/
//                 id: 3,
//                 linkUrl: 'shop/sneakers'
//             },
//             {
//                 title: 'womens',
//                 // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                 imageUrl: 'images/womens.png', // local file in public/images/
//                 size: 'large',
//                 id: 4,
//                 linkUrl: 'shop/womens'
//             },
//             {
//                 title: 'mens',
//                 // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                 imageUrl: 'images/men.png', // local file in public/images/
//                 size: 'large',
//                 id: 5,
//                 linkUrl: 'shop/mens'
//             }
//         ]
        
//     }
//     }

//     render(){
//         return(
//          <div className='directory-menu'>
//          {/* {
//                 this.state.sections.map(section => <MenuItem key={section.id} {...section}/> )  
//           } */}

//           {
//             this.state.sections.map(({id,...otherSectionProps}) =>
        
//               <MenuItem key={id} {...otherSectionProps}/>  
//             )
//           }
      
//          </div>
//         )
//      }

// }

// export default Directory