import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Profile from './components/profile';
import Posts from './components/posts';
import PostsItem from './components/posts_item';
class App extends Component{
	constructor(props){
		super(props);
       this.state = {
       	news:JSON,
       	filtered:JSON
       }
       
	}
    filterNews(keywords){
       	let filtered = this.state.news.filter((item) => {
           return item.title.indexOf(keywords) > -1;
       	})    
       this.setState({filtered:filtered})
       	 }

	render(){
		return(
           <div>
           <Header newsSearch={keywords=>this.filterNews(keywords)}/>
           <NewsList news={this.state.filtered} />
           </div>
			);
	}
}


ReactDOM.render(
	<BrowserRouter>
	<div>
	<header>
	<Link to= "/">Home</Link><br/>
	<Link to= "/posts">Posts</Link><br/>
	<Link to= "/profile">Profile</Link><br/>
	</header>
	<Route exact path="/" component={App}></Route>
	<Route path="/profile" component={Profile}></Route>
	<Route exact path="/posts" component={Posts}></Route>
	<Route path="/posts/:id" component={PostsItem}></Route>
	</div>
	</BrowserRouter>
	, document.querySelector('#root'));