import axios from 'axios';

export default axios.create({

    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3yeG-oW4bsGnP09SKKSLWeHokdPZMqHa_qPCEEYhMWo'
    }

});

