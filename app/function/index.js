const fs = require("fs");
const path = require("path");

module.exports = async function (context, req) {

    // Read HTML file
    const filePath = path.join(__dirname, "index.html");
    let html = fs.readFileSync(filePath, "utf8");

    // Inject environment variable
    const env = process.env.ENVIRONMENT || "unknown";
    html = html.replace("${ENVIRONMENT}", env);

    // Return HTML response
    context.res = {
        headers: { "Content-Type": "text/html" },
        body: html
    };
};
