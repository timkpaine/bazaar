import React, { Component } from 'react';
import { connect } from 'react-redux'
import { allItems } from './reducers'
import { addToCart } from './actions/cart'

class Home extends Component {
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card small" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span to="/" className="btn-floating waves-effect waves-light" 
                            onClick={()=>{this.handleClick(item.id)}}
                            style={{position:"absolute", right:24, top:5}}>
                            <i className="material-icons">add</i>
                        </span>
                        <span className="card-title teal left"
                            style={{position:"absolute", right:0,
                                    top:0, height: 50,
                                    padding:5
                                    }}>
                            {item.title}
                        </span>
                    </div>

                    <div className="card-content small">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                 </div>
            )
        })

        return(
            <div className="row">
                <div className="col s4"
                    style={{paddingLeft: 0}}>
                    <nav className="nav-wrapper blue">
                        <div className="col s12">
                            <a href="/" class="breadcrumb">Browse</a>
                        </div>
                    </nav>
                    <ul className="collection">
                        <a href="/shop/category1" className="collection-item">Category 1</a>
                        <a href="/shop/category2" className="collection-item">Category 2</a>
                        <a href="/shop/category3" className="collection-item">Category 3</a>
                        <a href="/shop/category4" className="collection-item">Category 4</a>
                        <a href="/shop/category5" className="collection-item">Category 5</a>
                        <a href="/shop/category6" className="collection-item">Category 6</a>
                        <a href="/shop/category7" className="collection-item">Category 7</a>
                        <a href="/shop/category8" className="collection-item">Category 8</a>
                        <a href="/shop/category9" className="collection-item">Category 9</a>
                        <a href="/shop/category10" className="collection-item">Category 10</a>
                    </ul>
                </div>
                <div className="col s8"
                    style={{paddingLeft: 0, paddingRight: 0}}>
                <div className="col s12"
                    style={{paddingLeft: 0}}>
                    <div className="box">
                        {itemList}
                    </div>
                </div>
                <div className="row s1">
                    <div className="col s12 center">
                    <ul class="pagination">
                        <li class="disabled"><a href="/shop"><i class="material-icons">chevron_left</i></a></li>
                        <li class="teal active"><a href="/shop/browse/1">1</a></li>
                        <li class="waves-effect"><a href="/shop/browse/2">2</a></li>
                        <li class="waves-effect"><a href="/shop/browse/2">3</a></li>
                        <li class="waves-effect"><a href="/shop/browse/2">4</a></li>
                        <li class="waves-effect"><a href="/shop/browse/2">5</a></li>
                        <li class="waves-effect"><a href="/shop/browse/2"><i class="material-icons">chevron_right</i></a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: allItems(state)
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
