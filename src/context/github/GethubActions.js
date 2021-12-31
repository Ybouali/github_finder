import  axios from 'axios'

const GETHUB_URL = process.env.REACT_APP_GETHUB_URL
const GETHUB_TOKEN = process.env.REACT_APP_GETHUB_TOKEN

const github = axios.create({
    baseURL: GETHUB_URL,
    headers: { Authorization: `token ${GETHUB_TOKEN}` }
})

// Search users by name 
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}


// Get User and repos
export const getUserAndRepos = async (login) => {

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    })

    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos?${params}`),
    ])
    if (user.status === 404)
        window.Location = '/notfound'
    else {
        return { user: user.data, repos: repos.data }
    }
}