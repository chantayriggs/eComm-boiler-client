import React from 'react'
import Banner from "./banner"

const About = () => {
    return (
        <div>
            <Banner title={"About Us"} path={"About"} />
            <div className="about-content-wrapper">
                <div className="mission">
                    <div className="header">Our Mission Statement</div>
                    <div>Quisque ornare arcu eu quam rutrum consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse neque sem, dapibus a dolor eget, tincidunt finibus ante.</div>
                </div>
                <div className="squares-wrapper" >
                    <div className="square">
                      
                            <img src={"https://source.unsplash.com/random"} />
                      
                        <div className="word" >
                            <div className="header">Welcome to Company!</div>
                            <div>	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum orci sem, nec vehicula ipsum feugiat eu. Donec mollis nibh at quam varius, et dignissim felis molestie. Nunc nec dolor non lorem accumsan gravida. Morbi at ex in eros sollicitudin molestie quis vitae nisl. Quisque ultricies varius efficitur. Morbi malesuada interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis egestas id risus laoreet rhoncus. Praesent mattis erat a maximus aliquam. Nulla augue orci, feugiat quis laoreet in, rutrum quis felis. Praesent imperdiet ultricies felis, eu malesuada justo venenatis a. Sed pellentesque erat sed felis faucibus, non efficitur nibh dictum.</div>
                        </div>
                    </div>
                    <div className="square">
                        <div className="word company" >
                            <div className="header">Company story</div>
                            <div>	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;Nunc porttitor venenatis consectetur. Cras laoreet fringilla ipsum non dictum. Phasellus vitae ligula ante. Fusce nunc tellus, porta a est nec, fringilla euismod metus. Praesent ac sollicitudin sem, sed dignissim turpis. Aliquam ipsum turpis, fermentum eu tincidunt eget, mollis et sem. Nulla feugiat sem sit amet mauris efficitur volutpat. Vivamus congue, purus in aliquet convallis, eros urna dignissim lorem, in luctus mauris diam vitae tellus. Nunc risus ex, lacinia vitae libero vitae, molestie posuere tortor. Cras fringilla, nibh in hendrerit commodo, nulla nisl viverra ex, sit amet feugiat lorem lacus vel mi. Duis semper luctus fringilla. Nunc vel libero lacinia, sodales leo sed, placerat metus.</div>
                        </div>
                        <div>
                            <img src={"https://source.unsplash.com/random"} />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About