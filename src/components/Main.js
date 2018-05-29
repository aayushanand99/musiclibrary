import React, { Component } from 'react';
import '../App.css';
import { getSongs, searchSongs } from '../actions'
import { connect } from "react-redux";
import { ProductCard } from 'react-ui-cards'
import Masonry from 'react-masonry-component';
import SearchBar from './SearchBar'
import { Offline, Online } from "react-detect-offline";



class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { songs: [], search: false }
    }

    componentDidMount() {
        this.props.getSongs()
    }


    handleSearch(text) {
        if (this.props.songs) {
            if (!text) {
                this.setState({ search: false })
            }
            else {
                let arr = this.props.songs.filter((item) => {
                    return item['im:name'].label.toUpperCase().startsWith(text.toUpperCase())
                })
                this.setState({ search: true }, () => { this.props.searchSongs({ arr }) })
            }
        }
    }

    render() {
        let songs = this.state.search ? this.props.searchResult : this.props.songs
        return (
            <div className="container-fluid " id="con" >
                <div className="page-header">
                    <h1 className="title">Top 100 Songs</h1>
                    <SearchBar handleSearch={(text) => this.handleSearch(text)} />
                </div>
                <Online>

                <Masonry
                    className={'my-gallery-class'}
                    options={{
                        isFitWidth: true,
                    }}
                >

                    {
                        songs && songs.map((item, index) => {
                            return <div key={"" + index} className="card box">
                                <img src={item['im:image'][2].label} />
                                <div className="card-body description">
                                    <h7 className={'card-title'}>{item['im:name'].label}</h7>
                                </div>
                                <div className="description footer artistName">Artist: {item['im:artist'].label}<br />
                                    {item.rights.label}
                                </div>

                            </div>
                        })
                    }
                    {
                        songs && songs.length===0 && <p className="artistName"> Sorry... No Items Found</p>
                    }

                </Masonry>
                </Online>

                <Offline >
                    <div className="title">
                    <h3 className="artistName">You need to be connected to internet for this</h3>
                    </div>
                </Offline>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        songs: state.songsReducer && state.songsReducer.songs,
        searchResult: state.searchReducer.searchResult
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getSongs: function (params) {
            dispatch(getSongs(params))
        },
        searchSongs: function (params) {
            dispatch(searchSongs(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
