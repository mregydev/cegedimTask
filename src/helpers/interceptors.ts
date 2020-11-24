export default (req: any) => {

    const token = sessionStorage['accessToken']

    req.headers = { Authorization: `Bearer ${token}` };

    return req
}