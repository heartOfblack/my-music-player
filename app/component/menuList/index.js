import React from 'react';
import Store from '../../store';
import './index.scss';

class MenuList extends React.Component {

    constructor(props) {
        super(props);
        this.Store = new Store();
        this.state = {
            musicObj: this.Store.localMusicStore
        };
        this.app = this.props.app;

    }

    drop = e => {
        e.preventDefault();
        let fileDatas = [];
        for (let f of e.dataTransfer.files) {
            fileDatas.push({fileName: f.name, filePath: f.path});
        }
        this
            .Store
            .addMusic(fileDatas);
        this.updateMenuList()
    }

    updateMenuList = () => {
        this.setState({musicObj: this.Store.localMusicStore});

    }

    dragover = e => {
        e.preventDefault();
        return;
    }

    playMusic = musicSrc => {

        this
            .app
            .playMusic(musicSrc);

    }

    deleteMusic = fileName => {
        this
            .Store
            .deleteMusic(fileName);
        this.updateMenuList();
    }

    render() {
        let musicList = [];
        let {musicObj} = this.state;
        Object
            .keys(musicObj)
            .map(item => {
                musicList.push(
                    <li
                        className="music-li"
                        key={item}
                        onDoubleClick={() => {
                        this.playMusic(musicObj[item])
                    }}>{item}
                        <p
                            onClick={() => {
                            this.deleteMusic(item)
                        }}>X</p>
                    </li>
                );

            })

        return <div className="left" onDrop={this.drop} onDragOver={this.dragover}>
            {musicList}

        </div>

    }

}

export default MenuList;