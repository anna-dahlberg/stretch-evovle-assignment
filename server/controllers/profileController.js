import fetch from 'node-fetch';

export async function fetchProfiles(req, res) {
    const response = await fetch('https://randomuser.me/api/?results=36');
    const data = await response.json();

    res.json(data.results)

}




