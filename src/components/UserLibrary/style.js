import styled from 'styled-components'


export const UserLibraryLayout = styled.div`
    height: auto;
    min-width: 469px;
    margin-top: 95px;
    padding: 0 32px;
    font-family: sans-serif;
    letter-spacing: 0.1px;

    .collection-layout {
        margin-top:35px;
        display: grid;
        grid-gap: 16px;
        grid-template-rows: repeat(auto-fit,minmax(min(10rem,270px),1fr));
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    }

    h1 {
        color:#fff;
        font-size:1.8em;
        font-family: sans-serif;
        margin: 0 0 12px 0;
    }
    h3 {
        color: #fff;
        margin: 0;
    }
`

export const CollectionItem = styled.li`
    position:relative;
    overflow:hidden;
    cursor:pointer;
    background: #282828;
    border-radius: 8px;
    padding: 20px 20px 16px;

    .item-detail {
        .item-description {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size:12px;
            height:40px;
        }

        .item-title {
            font-family:sans-serif;
            font-size: 14px;
            line-height: 20px;
            font-weight: 700;
            letter-spacing: .24px;
            color: #fff;
            h4 {
                margin:0;
            }
        }
    }

    .cover-art {
        margin-bottom:16px;
    }

    .item-cover {
        width: 100%;
        height: auto;
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    }

    .empty-playlist {
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
        background: #383838;
        width:100%;
        height:150px;
        max-width: 186.5px;
        max-height: 186.5px;
        display:flex;
        justify-content:center;
        align-items:center;

        .empty-icon {
            filter:invert(0.7);
            width: 90px;
            height: 90px;
        }
    }

    .play-btn {
        right:16px;
        bottom:13px;
        opacity:0;
        display:flex;
        position:absolute;
        justify-content:center;
        align-items:center;
        width: 43px;
        height: 43px;
        background:#1db954;
        border-radius:50%;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);

        > svg {
            filter: brightness(1.5);
        }
    }
    &:hover {
        .play-btn {
            opacity:1;
        }
    }
`