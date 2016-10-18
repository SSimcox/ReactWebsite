/**
 * Created by Steven on 10/17/2016.
 */

var Header = React.createClass({
    render: function(){
        return (
            <header>
                <a href="./"><img className="logo" src="./resources/logoDL.png" alt="e i Games logo"/></a>
                <nav>
                    <ul>
                        <li><a href="./about.html">About Me</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
});

var Footer = React.createClass({
    render: function(){
        return (
            <footer className="bg-sec">
                <div>
                    <nav>
                        <ul className="footer-nav">
                            <li><a href="./">Home</a></li>
                            <li><a href="./about.html">About Me</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <nav className="social">
                        <ul>
                            <li><a className="no-hov" href="http://github.com/SSimcox" target="_blank"><img className="social-icon" src="./resources/GitHub-Mark-Light-32px.png" alt="github octocat mark"/></a></li>
                            <li><a className="no-hov" href="https://www.facebook.com/steven.simcox.98" target="_blank"><img className="social-icon" src="./resources/FB-f-Logo__white_50.png" alt="facebook f logo"/></a></li>
                            <li><a className="no-hov" href="https://twitter.com/sdsimcox" target="_blank"><img className="social-icon" src="./resources/TwitterLogo_white.png" alt="twitter bird logo"/></a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                <pre>&copy; eiGames 2016
Social media Images/Icons provided by their respective owners
                </pre>
                </div>
            </footer>
        );
    }
});

var IndexContent = React.createClass({
    render: function(){
        return(
            <div className="main">
                <section>
                    <h1 className="bg-sec">Learning Computer Graphics</h1>
                    <ul className="section-list bg-tert">
                        <li id="dclink" className="gameName"><a href="Graphics-I/DragonCurve/">Dragon Curve</a></li>
                        <li id="smlink" className="gameName"><a href="Graphics-I/SierpinskiMountain/">Sierpinski Mountain</a></li>
                        <li id="3dmlink" className="gameName"><a href="Graphics-I/3DMaze/" target="_top">3d Maze</a></li>
                    </ul>
                    <div id="dc-iframe" className="graphicsFrame">
                        <iframe id="dcframe" src="">
                            Oops...Your browser does not support iframes
                        </iframe>
                    </div>

                    <div id="sm-iframe" className="graphicsFrame">
                        <iframe id="smframe" src="">
                            Oops...Your browser does not support iframes
                        </iframe>
                    </div>
                </section>
                <section>
                    <h1 className="bg-sec">Learning Web Development</h1>
                    <ul className="section-list bg-tert">
                        <li className="gameName"><a href="./CS2610/blogpost.html" target="_blank">Blog Post!</a></li>
                    </ul>
                </section>
            </div>
        );
    }
});

var HomePage = React.createClass({
    render: function(){
        return (
            <div>
                <Header />
                <IndexContent />
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(<HomePage />, $('#body')[0] );