import { create_header } from "./header_construtor.js"

let connection = async () => {
    const requestedURL_header = '/JSON/header_information.json';
    const request_header = new Request(requestedURL_header);

    const response = await fetch(request_header);
    const header = await response.json();

    create_header(header);
};

connection();