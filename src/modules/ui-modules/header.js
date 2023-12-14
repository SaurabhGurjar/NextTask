import LOGO from '../../assets/icons/logo.svg';
import '../../css/header.css';

export default function header() {
    return `
    <div class="header">
    <div class="hlt-section">
        <div class="logo-wrapper">
            <span id="logo-text">NextTask</span><img src="${LOGO}" id="logo-icon" alt="NT">
        </div>
    </div>
    <div class="hrt-section"></div>
    </div>
    `;
}