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
                <div className="card" key={item.id}>
                    <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                        <span className="card-title teal">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light" 
                            onClick={()=>{this.handleClick(item.id)}}>
                            <i className="material-icons">add</i>
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
                        <a className="collection-item">Category 1</a>
                        <a className="collection-item">Category 2</a>
                        <a className="collection-item">Category 3</a>
                        <a className="collection-item">Category 4</a>
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
                        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                        <li class="active"><a href="#!">1</a></li>
                        <li class="waves-effect"><a href="#!">2</a></li>
                        <li class="waves-effect"><a href="#!">3</a></li>
                        <li class="waves-effect"><a href="#!">4</a></li>
                        <li class="waves-effect"><a href="#!">5</a></li>
                        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
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
