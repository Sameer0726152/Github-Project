async function getUser(username)
{
    const url = `https://api.github.com/users/${username}`; 
    const response = await fetch(url);
    if (!response.ok)
    {
        throw new Error("User not found");
    }
    return await response.json();
}

async function getRepositories(username)
{
    const repoURL = `https://api.github.com/users/${username}/repos`;
    const repoResponse = await fetch(repoURL);
    if(!repoResponse.ok)
    {
        throw new Error("No repositories available");
    }
    return await repoResponse.json();
}
