import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 300px auto 200px;
    align-items: center;
    padding: 5px 20px;
    height: 60px;
    border-bottom: 1px solid lightgray;
`
const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 40px;
    }
    span{
        font-size: 22px;
        margin-left: 10px;
        color: gray;
    }
`

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    width: 700px;
    background-color: whitesmoke;
    padding: 12px;
    border-radius: 10px;
    input{
        background-color: transparent;
        border: 0;
        outline: 0;
        flex: 1;
    }
`
const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    span {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    svg.MuiSvgIcon-root{
        margin: 0px 10px;
    }
`

const Header = ({ photoURL }) => {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Google Drive" />
                <span>Drive</span>
            </HeaderLogo>
            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder='Search in Drive' />
                <FormatAlignCenterIcon />
            </HeaderSearch>
            <HeaderIcons>
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <span>
                    <AppsIcon />
                    <Avatar src={photoURL} />
                </span>
            </HeaderIcons>
        </HeaderContainer>
    )
}
export default Header