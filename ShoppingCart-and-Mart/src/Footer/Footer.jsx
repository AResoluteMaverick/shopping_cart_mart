function FooterLinks () {
    return (
        <div className="linkContainer">    
            <div className="dummyLinks">
                <ul>
                    <li>This is a link</li>
                    <li>This is a Link</li>
                    <li>This is a Link</li>
                    <li>This is a LInk</li>
                </ul>
            </div>

            <div className="dummyLinks">
                <ul>
                    <li>This is a link</li>
                    <li>This is a Link</li>
                    <li>This is a Link</li>
                    <li>This is a LInk</li>
                </ul>
            </div>

            <div className="dummyLinks">
                <ul>
                    <li>This is a link</li>
                    <li>This is a Link</li>
                    <li>This is a Link</li>
                    <li>This is a LInk</li>
                </ul>
            </div>
    </div>
    )
}

function SocialIcons () {
    return (
    <div className="socialLinks">
        <div className="twitter socials">T</div>
        <div className="facebook socials">F</div>
        <div className="youtube socials">Y</div>
        <div className="instagram socials">I</div>
        </div>
    )
}


export default function Footer () {
    return (
        <footer>
            <FooterLinks />
            <SocialIcons />
        </footer>
    )
}