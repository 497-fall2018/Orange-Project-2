class APIConfig {
    static apiroot = (process.env.REACT_APP_SECRET) ? "DEPLOYMENT SERVER URL" : "http://127.0.0.1:8080";
}

export default APIConfig;