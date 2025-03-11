import React from 'react';

const Hero = () => {
    return (
        <div className="container bg-light my-4 rounded p-5">
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque magni modi aliquid sequi officiis vel, necessitatibus voluptas, vitae aspernatur iste explicabo adipisci ex error distinctio suscipit architecto perspiciatis minima!</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    );
};

export default Hero;