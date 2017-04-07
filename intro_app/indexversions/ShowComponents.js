var React = require('react');

var Title = React.createClass({
  render : function() {
    return (
      //<h3>Title: Friends </h3>
      <h3>Title: {this.props.showTitle} </h3>
    );
  }
});

var Poster = React.createClass({
  render: function(){
    return (
      <img src={this.props.showPoster} alt="Movie Poster" style={{height:400, width:800}} />
    );
  }
});

var ShowInfo = React.createClass({
  render: function() {
    return (
      <div>
      <p>Plot: {this.props.showPlot}</p>
      <h5>IMDB Rating: {this.props.showRating}</h5>
      </div>
    );
  }
});

var Show = React.createClass({
  //initialize the index = 0
  getDefaultProps: function() {
    return {
      showIndex: 0
    };
  },

  getInitialState: function(){
    return {
      showIndex:this.props.showIndex
    };
  },

  handleBtnClick: function(){
      var totalShows = this.props.shows.length;
      this.setState(function(prevState) {
        return {
          showIndex: (prevState.showIndex + 1) % totalShows
        };
      });
  },

  render: function() {
    var show = this.props.shows[this.state.showIndex];
    return (
      <div className="text-center">
        <Title showTitle={show.title}/>
        <Poster showPoster={show.poster}/>
        <ShowInfo showPlot={show.plot} showRating={show.imdbRating}/>
        <button onClick={this.handleBtnClick}>NEXTSHOW</button>
      </div>
    );
  }
});

module.exports = Show;
