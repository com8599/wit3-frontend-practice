import React from "react";

class Body extends React.Component {

    state = {
        dateNow: new Date()
    }
    render() {
        const {dateNow} = this.state;
        const year = dateNow.getFullYear();
        const month = dateNow.getMonth() + 1;
        const date = dateNow.getDate();
        const hours = dateNow.getHours();
        const minutes = dateNow.getMinutes();
        const seconds = dateNow.getSeconds();

        return(
            <div>
                <h1>{year}/{month >= 10 ? month : '0' + month}/{date >= 10 ? date : '0' + date} {hours >= 10 ? hours : '0' + hours}:{minutes >= 10 ? minutes : '0' + minutes}:{seconds >= 10 ? seconds : '0' + seconds} </h1>
            </div>
        );
    }

    getDate = () => {
        this.setState({
            dateNow: new Date()
        });
    };

    componentDidMount() {
        this.oneSecondCall = setInterval(() => this.getDate(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.oneSecondCall);
    }
}

export default Body;
