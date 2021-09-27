import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import React from 'react';

const commentsFromServer = [
  { id:1, name: 'Serin Kim', content: 'My comment!' },
  { id:2, name: '현빈', content: '이게 최선입니까? 확실해요?' },
  { id:3, name: 'Tony Stark', content: 'I am Iron Man. ' },
]

let timer;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: [
          { id:1, name: 'Serin Kim', content: 'My comment!' },
          { id:2, name: '현빈', content: '이게 최선입니까? 확실해요?' },
          { id:3, name: 'Tony Stark', content: 'I am Iron Man. ' },
        ],
  };
  } 

  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      // if (comments.length < commentsFromServer.length) {
      //   let index = comments.length;
      //   comments.push(commentsFromServer[index]);
      //   this.setState({
      //     comments: comments
      //   });
      if (comments.length > 0) {
        comments.pop();
        this.setState({
            comments: comments
        });
      
      } else if (timer) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render () {
    
    const { comments } = this.state;  // comments를 state에서 가져온다. 


    return (
      <div className="App" style={{ padding:16, backgroundColor: '#282c34'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          {comments.map((comment, index) => {
            return (
              <Comment 
                key={comment.id}
                id={comment.id}
                name={comment.name}
                content={comment.content}/>
            )
          })}
        </div>
        
      </div>
    );
  }
  
}

 

export default App;
