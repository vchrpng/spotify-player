import React from 'react'
import { connect } from 'react-redux'
import { UserLibraryLayout } from './style'
import { libraryView } from '../../constants'
// import { fetchArtist } from '../../actions/artist'
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { CollectionItem } from './style'

const MusicNoteIcon = require('../../images/note.svg')
class UserLibrary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }



    renderViewType = () => {

        switch(this.props.library) {
            case libraryView.PLAYLISTS :
               return this.renderCollectionItem(this.props.playlists)
            default :
               return null
        }
    }

    renderCollectionItem = (items) => {
        return items && items.map((item, i) => {
            const collectionDetail = item.description || `By ${item.owner.display_name}`
            return <CollectionItem key={i}>
                        <div className="collection-cover-art">
                            {item.images.length ?  <img className="item-cover" src={item.images[0].url}/> : 
                            <div className="empty-playlist">
                                <img className="empty-icon" src={MusicNoteIcon} />
                            </div>}
                        </div>
                        <div className="collection-item-detail">
                            {/* <div className="play-btn"><PlayArrowIcon /></div> */}
                            <div className="item-title">
                                <h4>{item.name}</h4>
                            </div>
                            <div>
                                <span>{collectionDetail}</span>
                            </div>
                        </div>
                    </CollectionItem>
                })
    }

    render() {
        return (
        <UserLibraryLayout>
            <h3>{this.props.library}</h3>
            <ul className="collection-layout">
                {this.renderViewType()}
            </ul>
        </UserLibraryLayout>
        )
    }
}

export default connect(state => ({
    playlists: state.playlistReducer.playlists,
    library: state.uiReducer.library 
}))(UserLibrary)