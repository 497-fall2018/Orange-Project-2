class APIConfig {
    static apiroot = (process.env.REACT_APP_SECRET) ? "DEPLOYMENT SERVER URL" : "http://ec2-52-12-208-85.us-west-2.compute.amazonaws.com/";
}

export default APIConfig;